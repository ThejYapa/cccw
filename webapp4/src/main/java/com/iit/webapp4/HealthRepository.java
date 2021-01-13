package com.iit.webapp4;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource (collectionResourceRel = "health", path = "health")

//public interface MonitorRepository extends MongoRepository<Monitor, String> {
public interface HealthRepository extends MongoRepository<Health, String> {

    //long deleteByStId(@Param("stID") String stID);
    List <Health> findAllByStId(@Param("stID") String stID);
    List<Health> findByStId (@Param("stID") String stID);

}