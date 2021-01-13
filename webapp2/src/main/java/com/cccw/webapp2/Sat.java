package com.cccw.webapp2;

import org.springframework.data.annotation.Id;

public class Sat {

    @Id private String id;

    private String stId;
    private String launchTime;
    private String launchVehicle;
    private String orbitAltitude;
    private String inclination;

    public Sat(){
    }

    public Sat(String stId,String launchTime,String launchVehicle,String orbitAltitude,String inclination) {
        this.stId=stId;
        this.launchTime=launchTime;
        this.launchVehicle=launchVehicle;
        this.orbitAltitude=orbitAltitude;
        this.inclination=inclination;
    }

    public String getStId() {
        return stId;
    }

    public void setStId(String stId) {
        this.stId = stId;
    }

    public String getLaunchTime() {
        return launchTime;
    }

    public void setLaunchTime(String launchTime) {
        this.launchTime = launchTime;
    }

    public String getLaunchVehicle() {
        return launchVehicle;
    }

    public void setLaunchVehicle(String launchVehicle) {
        this.launchVehicle = launchVehicle;
    }

    public String getOrbitAltitude() {
        return orbitAltitude;
    }

    public void setOrbitAltitude(String orbitAltitude) {
        this.orbitAltitude = orbitAltitude;
    }

    public String getInclination() {
        return inclination;
    }

    public void setInclination(String inclination) {
        this.inclination = inclination;
    }
}