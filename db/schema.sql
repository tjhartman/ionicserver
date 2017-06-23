insert into Options (Options, Value, Question_id)
values ('', '', 2),
        ('', '', 2),
        ('', '', 2),
        ('', '', 2);

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

insert into Options (Options, Value, Question_id)
values ('Arrogant', 'Red', 2),
        ('Indecisive', 'White', 2),
        ('A perfectionist', 'Blue', 2),
        ('Poor follow through', 'Yellow', 2);

insert into Options (Options, Value, Question_id)
values ('Enthusiastic', 'Yellow', 3),
        ('Kind', 'White', 3),
        ('Caring', 'Blue', 3),
        ('Productive', 'Red', 3);

insert into Options (Options, Value, Question_id)
values ('Relentless', 'Red', 4),
        ('Suspicious', 'Blue', 4),
        ('Indifferent', 'White', 4),
        ('Naive', 'Yellow', 4);

insert into Options (Options, Value, Question_id)
values ('Peaceful', 'White', 5),
        ('Carefree', 'Yellow', 5),
        ('Decisive', 'Red', 5),
        ('Loyal', 'Blue', 5);

insert into Options (Options, Value, Question_id)
values ('Silently stubborn', 'White', 6),
        ('Worry prone', 'Blue', 6),
        ('An interruptor', 'Yellow', 6),
        ('Obsessive', 'Red', 6);

insert into Options (Options, Value, Question_id)
values ('Sociable', 'Yellow', 7),
        ('Assertive', 'Red', 7),
        ('Intimate', 'Blue', 7),
        ('Non-discriminate', 'White', 7);

insert into Options (Options, Value, Question_id)
values ('Self-critical', 'Blue', 8),
        ('Bossy', 'Red', 8),
        ('Unfocused', 'Yellow', 8),
        ('Avoids conflict', 'White', 8);

insert into Options (Options, Value, Question_id)
values ('Flexible', 'Yellow', 9),
        ('Voice of reason', 'White', 9),
        ('Action-oriented', 'Red', 9),
        ('Analytical', 'Blue', 9);

insert into Options (Options, Value, Question_id)
values ('Critical of others', 'Red', 10),
        ('Disinterested', 'White', 10),
        ('Overly sensitive', 'Blue', 10),
        ('Irresponsible', 'Yellow', 10);

insert into Options (Options, Value, Question_id)
values ('Determined', 'Red', 11),
        ('Thoughtful', 'Blue', 11),
        ('A good listener', 'White', 11),
        ('Positive', 'Yellow', 11);

insert into Options (Options, Value, Question_id)
values ('Unmotivated', 'White', 12),
        ('Vain', 'Yellow', 12),
        ('Demanding', 'Red', 12),
        ('Unforgiving', 'Blue', 12);

insert into Options (Options, Value, Question_id)
values ('Happy', 'Yellow', 13),
        ('Compassionate', 'Blue', 13),
        ('Inventive', 'White', 13),
        ('Responsible', 'Red', 13);

insert into Options (Options, Value, Question_id)
values ('Impulsive', 'Yellow', 14),
        ('Impatient', 'Red', 14),
        ('Moody', 'Blue', 14),
        ('Indirect communicator', 'White', 14);

insert into Options (Options, Value, Question_id)
values ('A leader', 'Red', 15),
        ('Patient', 'White', 15),
        ('Fun-loving', 'Yellow', 15),
        ('Respectful', 'Blue', 15);

insert into Options (Options, Value, Question_id)
values ('Jealous', 'Blue', 16),
        ('Reluctant', 'White', 16),
        ('Argumentative', 'Red', 16),
        ('Obnoxious', 'Yellow', 16);

insert into Options (Options, Value, Question_id)
values ('Driven, direct, and delegating', 'Red', 17),
        ('Deliberate, accurate, reliable', 'Blue', 17),
        ('Patient, adaptable, tactful', 'White', 17),
        ('Fun-loving, spirited, and casual', 'Yellow', 17);

insert into Options (Options, Value, Question_id)
values ('Cry, feel hurt, and plan revenge', 'Blue', 18),
        ('Distance myself to avoid further conflict', 'Yellow', 18),
        ('Fight back with facts and anger', 'Red', 18),
        ('Become quiet, withdrawn, and often hold anger until I blow up over some minor issue later', 'White', 18);

insert into Options (Options, Value, Question_id)
values ('Allows me to be playful, lighthearted, and optimistic', 'Yellow', 19),
        ('Is free of pressure and stress', 'White', 19),
        ('Is filled with people and purpose', 'Blue', 19),
        ('Is task-oriented and productive', 'Red', 19);

insert into Options (Options, Value, Question_id)
values ('Stubborn, bright and/or aggressive', 'Red', 20),
        ('Too talkative, happy, and/or playful', 'Yellow', 20),
        ('Well behaved, caring, and/or depressed', 'Blue', 20),
        ('Quiet, easygoing, and/or shy', 'White', 20);

insert into Options (Options, Value, Question_id)
values ('Stubborn, bright and/or aggressive', 'Red', 20),
        ('Too talkative, happy, and/or playful', 'Yellow', 20),
        ('Well behaved, caring, and/or depressed', 'Blue', 20),
        ('Quiet, easygoing, and/or shy', 'White', 20);

insert into Options (Options, Value, Question_id)
values ('Accepting, content, and/or unmotivated', 'White', 21),
        ('Opinionated, determined, and/or bossy', 'Red', 21),
        ('Responsible, honest, and/or unforgiving', 'Blue', 21),
        ('Charismatic, positive, and/or obnoxious', 'Yellow', 21);

insert into Options (Options, Value, Question_id)
values ('Verbally stubborn about facts', 'Red', 22),
        ('Concerned about others feelings and principles', 'Blue', 22),
        ('Silently stubborn, uncomfortable and/or confused', 'White', 22),
        ('Loud, uncomfortable and/or compromising', 'Yellow', 22);

insert into Options (Options, Value, Question_id)
values ('A healthy activity, which should be done right if it is do be done at all', 'Blue', 23),
        ('A most productive way to spend ones time', 'Red', 23),
        ('A necessary evil, much less inviting than play', 'Yellow', 23),
        ('A positive activity as long as it is something I enjoy and don''t feel pressured to accomplish', 'White', 23);

insert into Questions (Question, Question_id)
values ('I am...', 1);