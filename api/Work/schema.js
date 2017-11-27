module.exports = (mongoose, models) => {

  models.Work = mongoose.model(
    'Work',
    new mongoose.Schema(
        {
            name: String,
            url: String,
            about: String,
            imgSrc: String,
            date: {type: Date, default: Date.now},
            type: String,
            tags: [String],
        }
    ));

}
