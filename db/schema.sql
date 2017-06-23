create table Questions (
Question text,
Question_id int
);

create table Options (
Options text,
Value text,
Question_id int
);

insert into Options (Options, Value, Question_id) 
values ('Nurturing', 'Blue', 1), 
        ('Objective', 'White', 1), 
        ('Proactive', 'Red', 1), 
        ('Insightful', 'Yellow', 1);

insert into Questions (Question, Question_id)
values ('I am...', 1);