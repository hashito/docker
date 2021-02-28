create database jaywalking;
use jaywalking
create table users (id int not null auto_increment,name varchar(10),primary key (id));

insert into users(name)values("test1");
insert into users(name)values("test2");
insert into users(name)values("test3");
insert into users(name)values("test4");
insert into users(name)values("test5");

create table comment (user_id int,texts text,foreign key (user_id) references users(id));

insert into comment(user_id,texts)values(1,"test comment1");
insert into comment(user_id,texts)values(2,"test comment2");
insert into comment(user_id,texts)values(1,"test comment3");
insert into comment(user_id,texts)values(2,"test comment4");
insert into comment(user_id,texts)values(2,"test comment5");
insert into comment(user_id,texts)values(2,"test comment6");

ALTER TABLE comment DROP FOREIGN KEY `comment_ibfk_1`;
alter table comment MODIFY user_id varchar(100);

update comment set user_id="1,2,3" where user_id="1" limit 1;
update comment set user_id="1,3" where user_id="1" limit 1;

select * from comment where user_id like '%2%';
select * from comment where user_id like '%1%';

select * from comment where user_id REGEXP '[[:<:]]1[[:>:]]';
select * from comment where user_id REGEXP '[[:<:]]3[[:>:]]';


select * from comment INNER JOIN users on comment.user_id REGEXP CONCAT('[[:<:]]',users.id,'[[:>:]]') where users.id=1;
# indexが無効
# userが削除IDが更新された場合の処理が面倒
# user_idに別の文字列が入ってもわからない。
# 文字列長の長さに限界がある場合がある


# 解決策 交差テーブルを利用しましょう

