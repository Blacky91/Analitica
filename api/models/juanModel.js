var db = require('../../db');

var juanModel={
    getPostOfTheStudent:function(id, callback){
        //PARTICIPACION DE LOS POST DE UN ESTUDIANTE EN SU curso
        return db.query("select mdl_course.id as ID_Curso,shortname, mdl_forum.id  as ID_FORO,mdl_forum_discussions.userid as UserId,count(mdl_forum_posts.userid) as Cant_Post_Usuario from (mdl_course  join mdl_forum on mdl_course.id = mdl_forum.course join mdl_forum_discussions on mdl_forum.course=mdl_forum_discussions.course join mdl_forum_posts on  mdl_forum_posts.discussion = mdl_forum_discussions.id) where mdl_forum_posts.userid = ? and mdl_course.id= 2  group by mdl_course.id,shortname,mdl_forum.id ,mdl_forum_discussions.userid;",[id], callback);
    },
     getAllStudentsWithPost:function(callback){
        return db.query("select userid,firstname as Nombres, lastname as Apellidos from mdl_grade_items as gi,mdl_course, mdl_grade_grades as gg, mdl_user where mdl_course.id= 2 and mdl_user.id=gg.userid and gi.id=gg.itemid and finalgrade is not null group by userid,courseid;", callback);

    }
}

module.exports=juanModel;
