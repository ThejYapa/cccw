package com.iit.webapp;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sat")
public class Decom {

    @Id private String id;

    private String stId;

    public Decom(){
    }

    public Decom(String stId) {
        this.stId=stId;
    }

    public String getStId() {
        return stId;
    }

    public void setStId(String stId) {
        this.stId = stId;
    }

}