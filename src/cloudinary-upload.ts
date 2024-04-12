import cloudinary, {
  UploadApiResponse,
  UploadApiErrorResponse,
} from 'cloudinary';

export function upload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise<UploadApiResponse | UploadApiErrorResponse | undefined>(
    async (resolve, reject) => {
      try {
        const result = await cloudinary.v2.uploader.upload(file, {
          public_id,
          invalidate,
          overwrite,
          resource_type: 'auto',
        });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }
  );
}

export function videoUpload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise<UploadApiResponse | UploadApiErrorResponse | undefined>(
    async (resolve, reject) => {
      try {
        const result = await cloudinary.v2.uploader.upload(file, {
          public_id,
          invalidate,
          overwrite,
          resource_type: 'video',
          chunk_size: 50000,
        });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }
  );
}
