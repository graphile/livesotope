drop schema if exists app_public cascade;
create schema app_public;

set search_path to app_public, public;

create table people (
  id serial primary key,
  name text not null,
  avatar_url text,
  ranking int not null default 0
);

insert into people (name) values
  ('Alice'),
  ('Bob'),
  ('Caroline'),
  ('Dave'),
  ('Ellie'),
  ('Fred'),
  ('Georgina'),
  ('Harry'),
  ('Isabelle'),
  ('Jamie'),
  ('Kris'),
  ('Louise'),
  ('Mitch'),
  ('Naomi');
