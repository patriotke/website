/**
 *
 * MissingPersonForm
 *
 */

'use client';

import { z } from 'zod';
import { Input } from 'components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Popover, PopoverContent, PopoverTrigger } from 'components/ui/popover';
import { cn } from 'lib/utils';
import { format } from 'date-fns';
import { Button } from 'components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from 'components/ui/calendar';
import { Textarea } from 'components/ui/textarea';
import { ChangeEvent, useState } from 'react';
import { createPreview, getFileBase64, getImagePreview } from 'lib/imageLib';
import { submitMissingPersonRequest } from 'lib/requestLib';
import { IMissingPersonRequest } from 'types/request.types';

const isServer = typeof window === 'undefined';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  age: z.coerce
    .number({
      required_error: 'Age is required.',
    })
    .gte(0)
    .lte(120),
  missingDate: z.date({
    required_error: 'The date they went missing is required.',
  }), // .transform((date) => format(date,'yyyy-MM-dd')),
  location: z.string({
    required_error: 'The location is required.',
  }),
  photo: z
    .instanceof(isServer ? File : FileList, { message: 'Choose an image' })
    .transform((files: File | FileList) => files?.[0]),
  description: z
    .string({
      required_error: 'A description is required.',
    })
    .min(10, { message: 'Description must be at least 10 characters.' }),
});

function MissingPersonForm() {
  const [preview, setPreview] = useState<HTMLDivElement | null>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      age: 0,
      location: '',
      description: '',
    },
  });
  function onSubmit(data: z.infer<typeof formSchema>) {
    // console.log(data);
    return getFileBase64(data.photo).then((photo) => {
      const formData: IMissingPersonRequest = {
        ...data,
        photo,
        missingDate: format(data.missingDate, 'yyyy-MM-dd'),
      };
      // console.log(formData);
      return submitMissingPersonRequest(formData);
    });
    /* toast({
      title: "You submitted the following values:",
      description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    }) */
  }
  const photoRef = form.register('photo');
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !preview) return;
    // console.log(file);
    createPreview(preview, getImagePreview(file));
    // console.log(typeof e.target.files[0])
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <div className="py-5">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <div
                className="bg-slate-200 aspect-square mb-4"
                ref={(ref) => setPreview(ref)}
              />
              <div className="px-2">
                <FormField
                  control={form.control}
                  name="photo"
                  render={() => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className=""
                          {...photoRef}
                          type="file"
                          accept=".jpg, .jpeg, .png"
                          onChange={handleFileChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="col-span-3 flex flex-col space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[340px]"
                        placeholder="Full name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[340px]"
                        placeholder="Age"
                        {...field}
                        type="number"
                        min={0}
                        max={120}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="missingDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Missing Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      The date they went missing.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[340px]"
                        placeholder="e.g. Nairobi"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      Where were they last seen?
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder=""
                        className="resize-none w-[340px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Describe the person and the circumstances around their
                      disappearance.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default MissingPersonForm;
