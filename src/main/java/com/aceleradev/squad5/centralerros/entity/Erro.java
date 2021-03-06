package com.aceleradev.squad5.centralerros.entity;

import com.aceleradev.squad5.centralerros.enums.AmbienteEnum;
import com.aceleradev.squad5.centralerros.enums.LevelEnum;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = Erro.TABLE_NAME)
public class Erro {

    public static final String TABLE_NAME = "erro";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private AmbienteEnum ambiente;

    @NotNull
    private LevelEnum level;

    @NotNull
    @NotBlank
    private String descricao;

    @DateTimeFormat
    @NotNull
    @NotBlank
    private String data_hora;

    @NotNull
    @NotBlank
    private String titulo;

    @NotNull
    @NotBlank
    private String origem;

    @NotNull
    @NotBlank
    private String detalhes;

    private Integer eventos;

    private String coletor;

    private boolean arquivado = false;

    public void arquivar(){
        setArquivado(true);
    }

}
