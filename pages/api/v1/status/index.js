function status(request, response) {
  response.status(200).json({oi: "tchau"});
}

export default status;