export const getUser = (req, res) => {
  const name = "Jhon deo";

  res.send(name);
};

export const postUser = (req, res)=>{
    console.log(req.body);
}
