create database feel_good_BD;
use feel_good_BD;


--tabela para adicionar as images das informações dos imoveis.
create table TB_images_Imoveis(
id_img int primary key auto_increment,
img_um varchar(300),
img_dois varchar(300),
img_tres varchar(300),
img_quatro varchar(300)
);


--tabela de informações dos imoveis junto com a chave estrageira para pegar as imagens.
create table tb_infos_imoveis(
id_cardImovel     int primary key auto_increment,
id_img             int,
nm_imagem         varchar(200),
nm_apartamento     varchar(250) unique,
st_status         varchar(250),
rg_regiao         varchar(250),
lc_localizacao     varchar(250),
st_suites         varchar(250),
com_tamanho     varchar(250),
vg_vagas         varchar(250),
tt_titulo         varchar(200),
sb_sobre         varchar(4000),
foreign key(id_img) references TB_images_Imoveis(id_img)
); 