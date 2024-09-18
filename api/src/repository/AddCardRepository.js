import con from './connectionRepository.js';

export async function AddCard(card) {
    const comando = `
    insert into CardImovel(nm_imagem, nm_apartamento, st_status, lc_localizacao, com_tamanho, vg_vagas)
                values (?,?,?,?,?,?);
    `;

    let resposta = await con.query(comando, [card.imagem, card.apartamento, card.status, card.localizacao, card.tamanho, card.vagas ]);
    let info = resposta[0];
    return info.insertId
}