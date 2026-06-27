package com.saborrei.saborrei.api.Service;

import com.saborrei.saborrei.api.DTO.ReceitaDTO;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class IAService {

    public String gerarResposta(String pergunta, List<ReceitaDTO> receitas) {

        return "Resposta gerada pela IA para: " + pergunta;
    }
}
