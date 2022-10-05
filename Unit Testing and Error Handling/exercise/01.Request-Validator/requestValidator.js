function validator(object) {
  let uriPattern = /^([\w\d\.]+|\*)$/g;
  let messagePattern = /^([^<>\\&'"]*)$/g;

  let validMethod = ["GET", "POST", "DELETE", "CONNECT"];
  let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

  if (
    !object.hasOwnProperty("method") ||
    !validMethod.includes(object.method)
  ) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!object.hasOwnProperty("uri") || !uriPattern.test(object.uri)) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (
    !object.hasOwnProperty("version") ||
    !validVersion.includes(object.version)
  ) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (
    !object.hasOwnProperty("message") ||
    !messagePattern.test(object.message)
  ) {
    throw new Error("Invalid request header: Invalid Message");
  }
  return object;
}

console.log(
  validator({
    method: "GET",
    uri: "git.master",
    version: "HTTP/1.1",
    message: "-recursive",
  })
);
