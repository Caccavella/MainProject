insert into users
(displayname, email, pictureurl, authid)
values ($1, $2, $3, $4)
returning *;