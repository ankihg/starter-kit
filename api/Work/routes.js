'use strict';
const auth = require('../../lib/authenticate');
module.exports = (router, models) => {

  const Work = models.Work;

  router.route('/works')
    .get((req, res) => {
      Work.find({}, (err, works) => {
        if (err) return res.status(500).json({msg: 'error retrieving works', err:err, data:null});
        return res.status(200).json({msg: 'all projects', err: null, data: works});
      })
    })
    .post(auth, (req, res) => {
      var newWork = new Work(req.body);
      newWork.save((err, work) => {
        if (err) return res.status(500).json({msg: 'error creating work', err: err, data: null});
        return res.status(200).json({msg: 'created work', err: null, data: work});
      })
    });

    // router.route('/works/:id')
    //   .put(auth, (req, res) => {
    //     Project.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, project) => {
    //       if (err) return res.status(500).json({msg: 'error updating project', err:err, data:null});
    //       return res.status(200).json({msg: 'updated project', err:null, data:project});
    //     });
    //   })
    //   .delete(auth, (req, res) => {
    //     Project.findByIdAndRemove(req.params.id, (err) => {
    //       if (err) return res.status(500).json({msg: 'error deleting project', err:err, data:null});
    //       return res.status(200).json({msg: 'project deleted', err:null, data:null});
    //     });
    //   })

}
