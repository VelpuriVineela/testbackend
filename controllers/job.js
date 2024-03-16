const JobModel = require("../models/job");

const createJob = async (req, res) => {
  try {
    console.log(req.body);
    // TODO: Insert data into db for new job db.jobs.insertOne({})
    const newJob = new JobModel(req.body);
    const newlyInsertedJob = await newJob.save();
    console.log(newlyInsertedJob);

    res.json({
      success: true,
      message: "Job Created successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getJob = async (req, res) => {
  try {
    const jobList = await JobModel.find({});
    console.log(jobList);
    res.json({
      success: true,
      message: "Dummy job get API",
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const editJob = async (req, res) => {
  console.log(req.body);
  /**
   * await JobModel.updateOne(
    { _id: req.body._id },
    { $set: req.body }
  );
   */
  JobModel.findByIdAndUpdate(req.body._id, req.body);
  /* 
   await JobModel.updateMany(
    { title: req.body.title },
    { $set: req.body }
  );  
  */
  res.json({
    success: true,
    message: "Job edited successfully",
  });
};

const deleteJob = async (req, res) => {
  try {
    await JobModel.findByIdAndDelete(req.body._id);
    res.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: "Something went wrong, please try again after some time",
    });
  }
};

module.exports = {
  createJob,
  getJob,
  editJob,
  deleteJob,
};
