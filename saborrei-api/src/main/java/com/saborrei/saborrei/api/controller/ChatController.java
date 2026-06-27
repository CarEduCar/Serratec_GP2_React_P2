package com.saborrei.saborrei.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saborrei.saborrei.api.dto.ChatRequest;
import com.saborrei.saborrei.api.dto.ChatResponse;


@RestController
@RequestMapping("/chat")
public class ChatController {
    
    @PostMapping
    public ChatResponse conversar(@RequestBody ChatRequest request){
        
        String pergunta = request.getPergunta();

        return new ChatResponse("Recebi sua pergunta: " + pergunta);
    }

}
