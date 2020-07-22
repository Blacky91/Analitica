
var db = require('../../db');

// var Cursos={
    //getAllConsultas:function(callback){
      //  return db.query("select fullname,mdl_course.id as ID_Curso, mdl_forum.id  as ID_FORO,mdl_forum_posts.userid as ID_User, count(mdl_forum_posts.userid) as Cant_Post_Usuario from (mdl_course join mdl_forum on mdl_course.id = mdl_forum.course join mdl_forum_discussions on mdl_forum.id=mdl_forum_discussions.forum join  mdl_forum_posts on mdl_forum_discussions.id=mdl_forum_posts.discussion) where mdl_forum_posts.userid=2 group by fullname,mdl_course.id, mdl_forum.id ,mdl_forum_posts.userid ;", callback);

        //return db.query("select fullname,mdl_course.id as ID_Curso, mdl_forum.id  as ID_FORO,mdl_forum_posts.userid as ID_User, count(mdl_forum_posts.userid) as Cant_Post_Usuario from (mdl_course join mdl_forum on mdl_course.id = mdl_forum.course join mdl_forum_discussions on mdl_forum.id=mdl_forum_discussions.forum join  mdl_forum_posts on mdl_forum_discussions.id=mdl_forum_posts.discussion) group by fullname,mdl_course.id, mdl_forum.id ,mdl_forum_posts.userid ;",callback);
        //return db.query("select id, fullname, startdate from mdl_course order by startdate", callback);
  //  },
   // getConsultaByRes:function(id, callback){
        //return db.query("select fullname,mdl_course.id as ID_Curso, mdl_forum.id  as ID_FORO,mdl_forum_posts.userid as ID_User, count(mdl_forum_posts.userid) as Cant_Post_Usuario from (mdl_course join mdl_forum on mdl_course.id = mdl_forum.course join mdl_forum_discussions on mdl_forum.id=mdl_forum_discussions.forum join  mdl_forum_posts on mdl_forum_discussions.id=mdl_forum_posts.discussion) where mdl_forum_posts.userid=2 group by fullname,mdl_course.id, mdl_forum.id ,mdl_forum_posts.userid ;", [id],callback);
        //PARTICIPACION DE LOS POST DE UN ESTUDIANTE EN SUS CURSOS
      //  return db.query("select mdl_course.id as ID_Curso,shortname, mdl_forum.id  as ID_FORO,mdl_forum_discussions.userid as UserId,count(mdl_forum_posts.userid) as Cant_Post_Usuario from (mdl_course  join mdl_forum on mdl_course.id = mdl_forum.course join mdl_forum_discussions on mdl_forum.course=mdl_forum_discussions.course join mdl_forum_posts on  mdl_forum_posts.discussion = mdl_forum_discussions.id) where mdl_forum_posts.userid = ? group by mdl_course.id,shortname,mdl_forum.id ,mdl_forum_discussions.userid,mdl_forum_posts.userid;",[id], callback);
        //return db.query("select id, fullname, startdate from mdl_course where id =?", [id], callback);
    //}
//}

module.exports=Cursos;


//show databases;
//select userid,count(*) as acciones from mdl_logstore_standard_log group by userid order by  acciones;
//select action from  mdl_logstore_standard_log group by action;
//select id,course from mdl_forum;
//select id,forum from mdl_forum_discussions;
//desc mdl_forum;
//desc mdl_forum_posts;
//select fullname,mdl_course.id from mdl_course inner join mdl_forum on course = "2";
//select fullname,mdl_course.id , count(*) as foros from mdl_course,mdl_forum where  mdl_course.id=mdl_forum.course group by mdl_course.id;
//select fullname,mdl_course.id as ID_Curso, mdl_forum.id as ID_FORO, count(mdl_forum_posts.id) from mdl_course,mdl_forum, mdl_forum_discussions, mdl_forum_posts
//where mdl_course.id = mdl_forum.course and mdl_forum.id=mdl_forum_discussions.forum and mdl_forum_discussions.id=mdl_forum_posts.discussion
//group by mdl_forum.id;

//select userid,count(*) as acciones from mdl_logstore_standard_log group by userid order by  acciones;