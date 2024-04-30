
const projectModel = require('../models/projectModel')

module.exports.addProjects = async (req, res) => {
    console.log(req.file,req.body,16)
    
    const e_name = req.body.e_name
    const e_type = req.body.e_type
    const e_sdate = req.body.e_sdate
    const e_edate = req.body.e_edate
    // const e_poster = req.body.e_poster
    const e_fee= req.body.e_fee
    const e_contact= req.body.e_contact
    const e_country= req.body.e_country
    const e_state = req.body.e_state
    const e_city = req.body.e_city
    const e_address = req.body.e_address
    const e_more = req.body.e_more

    const e_clg = req.body.e_clg


    const e_poster=req.file.path
    if (!e_name || !e_sdate || !e_poster) {
        return res.send({ code: 400, message: 'Bad Request' })
    }
    const newProject = new projectModel({ e_name: e_name, e_type: e_type,e_sdate:e_sdate,e_edate:e_edate,e_poster:e_poster,e_fee:e_fee,e_contact:e_contact,e_country:e_country,e_state:e_state,e_city:e_city,e_address:e_address,e_more:e_more,e_clg:e_clg })
    const success = await newProject.save()
    if (success) {
        return res.send({ code: 200, message: 'sucsess' })
    } else {
        return res.send({ code: 400, message: 'Backend Error' })
    }

}
module.exports.getProjects = async (req,res) => {
    const _data= await projectModel.find({})
    if(_data)
    {
        return res.send({ code: 200, message: 'sucsess', data: _data })

    }
    else{
        return res.send({ code: 400, message: 'Backend Error' })

    }
}
module.exports.getProjectsece = async (req,res) => {
    const _data= await projectModel.find({e_city:'ece'})
    if(_data)
    {
        return res.send({ code: 200, message: 'sucsess', data: _data })

    }
    else{
        return res.send({ code: 400, message: 'Backend Error' })

    }
}
// module.exports.getProjectsece = async (req, res) => {
//     try {
//         const _data = await projectModel.find({ e_city: 'ece' });
// console.log(_data)
//         if (_data.length > 0) {
//             return res.status(200).send({ code: 200, message: 'Success', data: _data });
//         } else {
//             return res.status(404).send({ code: 404, message: 'No projects found for e_branch: ece' });
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         return res.status(500).send({ code: 500, message: 'Backend Error' });
//     }
// }

// module.exports.getSlider=async(req,res)=>
// {
//     const url1='https://media.istockphoto.com/id/1171902434/photo/smart-industry-control-concept.webp?b=1&s=170667a&w=0&k=20&c=F3flnxYp4lOY5NE9FRnMTCO_r01FhOP0IFm3F6nD42I='
//     const url2='https://media.istockphoto.com/id/950693474/photo/coworkers-brainstorming-ideas-for-project.webp?b=1&s=170667a&w=0&k=20&c=6vLjEwvpmehLGDvkq4TRoQELqfsZzi-1Lx-A8sfsRYI='
//     const url3='https://media.istockphoto.com/id/1213441993/photo/engineering-students-working-in-the-lab.webp?b=1&s=170667a&w=0&k=20&c=Qwy3x06MzeksDHzw5iz9-h60VS-uoJRAtMsVkeOFAR8='
//     const url4='https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0cm9uaWN8ZW58MHx8MHx8fDA%3D'
//     const arr=[url1,url2,url3,url4]
//     return res.send({code:200,message:'success',data:arr})
// }