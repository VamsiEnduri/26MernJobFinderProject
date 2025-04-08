const recuiter = require("../../modals/recuiterModal/recuiterSignUpModal");
async function postJob(req, res) {
  // const jobDetails=req.body;
  const { title, description, category, location, salary, email } = req.body;

  try {
    const isMatched = await recuiter.findOne({ email });
    if (!isMatched) {
      return res.status(404).json("recuiter not  found");
    }
    console.log(isMatched, "reciter matched");

    isMatched.profile.jobs.push({
      title,
      description,
      category,
      location,
      salary,
    });

    await isMatched.save();

    return res
      .status(200)
      .json({ msg: `job created successylly in ${email} recuiters profile` });
  } catch (err) {
    console.log(err);
  }
}

module.exports = postJob;
