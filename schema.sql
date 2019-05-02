drop schema if exists app_public cascade;
create schema app_public;

set search_path to app_public, public;

create table people (
  id serial primary key,
  name text not null,
  avatar_url text,
  ranking int not null default 0
);

insert into people (name, avatar_url) values
  ('Alice', '/01.png'),
  ('Bob', '/00.png'),
  ('Caroline', '/02.png'),
  ('Dave', '/04.png'),
  ('Ellie', '/03.png'),
  ('Fred', '/05.png'),
  ('Georgina', '/06.png'),
  ('Harry', '/08.png'),
  ('Isabelle', '/07.png'),
  ('Jamie', '/10.png'),
  ('Kris', '/09.png'),
  ('Louise', '/11.png'),
  ('Mitch', '/13.png'),
  ('Naomi', '/12.png'),
  ('Ollie', '/14.png'),
  ('Polly', '/15.png');
