/**
 *
 * Footer
 *
 */

function Footer() {
  return (
    <div className="bg-gray-100 pb-[env(safe-area-inset-bottom)] dark:bg-neutral-900 print:bg-transparent">
      <hr className="dark:border-neutral-800" />
      <div className="mx-auto flex max-w-[90rem] justify-center py-12 text-gray-600 dark:text-gray-400 md:justify-start pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        <div className="flex w-full flex-col items-center sm:items-start">
          <div>{process.env.NEXT_PUBLIC_TITLE}</div>
          <p className="mt-6 text-xs">{new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
