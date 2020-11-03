create table shops (
	id int,
	primary key (id),
    description varchar(200),
    name varchar(100),
    city varchar(100),
    country varchar(100)
);


create table products(
	id int,
    primary key (id),
	description varchar(200),
    name varchar(100),
    price float,
    store_id int
);
