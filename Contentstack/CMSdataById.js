import Stack from "./stack";

export default function CMSdataById(entry_id) {
  const query = Stack.ContentType("movie_details").Entry(entry_id);
let entry = query.fetch()
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