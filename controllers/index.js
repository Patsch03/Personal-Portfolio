function aboutShow(req, res){
    res.render('about');
}

function projectsShow(req,res){
    res.render('project');
}

module.exports = {
    aboutShow,
    projectsShow,
}