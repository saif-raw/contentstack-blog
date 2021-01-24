import Stack from "./stack";

export default function CMSdataById(id) {
  const query = Stack.ContentType("saif_blogs")
    .Entry(id)
    .includeReference("reference");

  let entry = query
    .fetch()
    .then(
      function success(entry) {
        return entry.toJSON();
      },
      function error(err) {
        console.log(err);
        return err;
      }
    )
    .then(function success(result) {
      return result;
    });
  return entry;
}
