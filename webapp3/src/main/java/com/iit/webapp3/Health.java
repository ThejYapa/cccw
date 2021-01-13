package com.iit.webapp3;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "health")
public class Health {

    @Id private String id;

    private String stId;

    public Health(){
    }

    public Health(String stId) {
        this.stId=stId;
    }

    public String getStId() {
        return stId;
    }

    public void setStId(String stId) {
        this.stId = stId;
    }

}