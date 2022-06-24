function checkAuthStatus(req, res, next){
    const uid = req.session.uid
    
    if(!uid){ 
        return next();
    }

    res.locals.isAuth = true;
    res.locals.uid = uid
    next()
}

module.exports = checkAuthStatus