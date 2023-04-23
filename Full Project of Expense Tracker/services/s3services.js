const AWS = require('aws-sdk');

const uploadToS3 = (data, filename) => {
    const BUCKET_NAME = 'expensetrackeramiya';
    const IAM_USER_KEY = 'AKIAUWHT4TBOVCJU3IM2';
    const IAM_USER_SECRET = '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';

    let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET
    });

    var params = {
        Bucket: BUCKET_NAME,
        Key: filename,
        Body: data,
        ACL: 'public-read'
    };

    return new Promise((resolve, reject) => {
        s3bucket.upload(params, (err, s3response) => {
            if (err) {
                console.log('something went wrong', err);
                reject(err);
            } else {
                console.log('success', s3response);
                resolve(s3response.Location);
            }
        });
    });
}

module.exports = {
    uploadToS3
}