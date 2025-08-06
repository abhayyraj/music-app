package com.musicappbackend.MusicAppBackend.Controller;

import com.musicappbackend.MusicAppBackend.Entity.MusicPlayer;
import com.musicappbackend.MusicAppBackend.Service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/music")
public class MusicController {

    @Autowired
    public MusicService musicService;

    @GetMapping("/{artist}")
    public MusicPlayer getMusicByArtist(@PathVariable String artist)
    {
        return null;
    }
}
