insert into users (username, password)
values ($1, $2)
returning username, password