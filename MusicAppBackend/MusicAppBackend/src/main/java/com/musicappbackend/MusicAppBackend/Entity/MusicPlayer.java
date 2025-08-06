package com.musicappbackend.MusicAppBackend.Entity;

import jdk.jfr.DataAmount;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MusicPlayer {
    private UUID musicId;
    private String musicurl;
    private String genre;
    private Time duration;
    private String musicimageurl;
    private String artist;
    private String musiclanguage;


}
