package com.iit.webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
//@RequestMapping("/api")
public class DecomController {

    @Autowired
    DecomRepository decomRepository;
//    public DecomRepository(NotificationRepo sat) {
//        NotificationProcessing.notificationRepo = notificationRepo;
//    }

//    @PostMapping("/decom")
//    public Sat postBody(@RequestBody Sat pstbdy){
//        return SatRepository.save(pstbdy);
//    }


    @DeleteMapping("/decom/{id}")
    @Transactional //added
    public ResponseEntity<HttpStatus> delete(@PathVariable String id) throws Exception {
        try {
            decomRepository.deleteByStId(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
        //public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") String id) {
//        try {
//            decomRepository.deleteById(id);
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } catch (Exception e) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
}

