package com.cccw.webapp2;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "newsat", path = "newsat")
public interface SatRepository extends MongoRepository<Sat, String> {

    List<Sat> findByStId(@Param("stID") String stID);


}