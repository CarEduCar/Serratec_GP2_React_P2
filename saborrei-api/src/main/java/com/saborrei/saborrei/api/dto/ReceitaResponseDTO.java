package com.saborrei.saborrei.api.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReceitaResponseDTO {

    private Long id;

    private String nomeReceita;

    private List<String> ingredientes;

    private String modoPreparo;
}
