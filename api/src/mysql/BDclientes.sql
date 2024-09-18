use feel_good_BD;

create table TB_cadastro_cliente(
id_cliete int primary key auto_increment,
nm_nome varchar(200),
em_email varchar(200) unique,
tl_telefone varchar(50) unique,
dt_cadastro date
);



create table tb_loginADM (
id_adm int primary key auto_increment,
nm_nome varchar(200),
em_email varchar(200) unique,
sn_senha varchar(50) unique
);

insert into tb_loginADM(nm_nome, em_email, sn_senha)
values ('Viktor Ortelan', 'jvortelan@gmail.com', 'jv20/08');


