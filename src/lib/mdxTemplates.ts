// eslint-disable-next-line import/prefer-default-export
import dedent from 'dedent';

export type IMissingPerson = {
  id: string;
  name: string;
  age: number;
  description: string;
  missingDate: string;
  location: string;
  photo: string;
};
export const getMissingPersonTemplate = ({
  id,
  name,
  age,
  description,
  missingDate,
  location,
  photo,
}: IMissingPerson) => dedent`---
  id: ${id}
  name: ${name}
  age: ${age}
  missing: ${missingDate}
  location: ${location}
  photo: ${photo}
  reported: ${new Date().toISOString()}
  ---
  
    ## Missing Person
    
    ![${name}](images/${photo})
    
    ${description}
  `;
