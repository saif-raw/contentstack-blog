import Stack from './stack';

function CMSdata(contentType) {
    const Query = Stack.ContentType(contentType).Query();
    return Query.toJSON()
      .find()
      .then(
        function success(result) {
          return result;
        },
        function error(err) {
          console.log(err);
          return err;
        }
      );
  }
  
export default CMSdata;