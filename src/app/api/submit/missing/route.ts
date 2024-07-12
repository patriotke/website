import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { Just } from 'monio';
import { IMissingPersonRequest } from 'types/request.types';
import { commitChange, createBranch } from 'lib/gitLib';
import { getMissingPersonTemplate } from 'lib/mdxTemplates';
import { getBlobFromDataUrl } from 'lib/imageLib';
import { getPropSafe } from 'lib/functionalLib';
import { getFileExtensionFomMimeType } from 'lib/fileLib';

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: NextRequest) {
  const body = (await request.json()) as IMissingPersonRequest;

  const id = uuidv4();
  const photoID = uuidv4();
  const photo = `${photoID}.png`;

  const filename = Just.from(body).chain.pipe(
    getPropSafe('photo'),
    getBlobFromDataUrl,
    (blob: Blob) => blob.type,
    getFileExtensionFomMimeType,
  );

  /* const photoData = Just.from(body).chain.pipe(
    getPropSafe('photo'),
    getBlobFromDataUrl,
    (blob: Blob) => blob.arrayBuffer(),
    (imageData: ArrayBuffer) => {
      commitChange(
        `missing-person/${id}`,
        `missing/${id}/images/${photo}`,
        imageData,
      );
      return getFileExtensionFomMimeType(imageData.type);
    },
  ); */

  /* const req = createBranch(`missing-person/${id}`)
    .then(() =>
      commitChange(
        `missing-person/${id}`,
        `missing/${id}/bio.md`,
        getMissingPersonTemplate({ ...body, id, photo }),
      )
        .then(() => getBlobFromDataUrl(body.photo).arrayBuffer())
        .then((imageData) =>
          commitChange(
            `missing-person/${id}`,
            `missing/${id}/images/${photo}`,
            imageData,
          ),
        ),
    )
    .catch((err) => console.error(err)); */

  return NextResponse.json({ ...body, message: 'Hello, World!' });
}
