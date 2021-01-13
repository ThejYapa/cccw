package com.iit.webapp;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "decom", path = "decom")

//public interface DecomRepository extends MongoRepository<Decom, String> {
public interface DecomRepository extends MongoRepository<Decom, String> {

    //long deleteByStId(@Param("stID") String stID);
    List <Decom> deleteByStId(@Param("stID") String stID);
    List<Decom> findByStId (@Param("stID") String stID);

}