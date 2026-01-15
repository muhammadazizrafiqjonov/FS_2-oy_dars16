CREATE TABLE cars (
    id serial PRIMARY KEY,
    model VARCHAR(50) not null,
    price int not NULL,
    year int not null
);

CREATE TABLE customers (
    id serial PRIMARY KEY,
    fullname varchar(50) not null,
    contact VARCHAR(50) not null
);

create table orders(
    id serial PRIMARY KEY,
    customer_id int REFERENCES customers(id),
    car_id int REFERENCES cars(id),
    month_count int,
    start_date date,
    end_date date,
    payment_date int,
    start_price int, 
    max_price int,   
    paid_price int,
    rest_price int
);
