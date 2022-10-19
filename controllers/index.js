function aboutShow(req, res){
    res.render('about');
}

function projectsShow(req,res){
    res.render('project');
}

function contactShow(req, res){
    res.render('contact');
}

module.exports = {
    aboutShow,
    projectsShow,
    contactShow,
}