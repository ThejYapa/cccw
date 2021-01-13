package com.iit.webapp3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
//@RequestMapping("/api")
public class HealthController {

    @Autowired
    HealthRepository healthRepository;
//    public DecomRepository(NotificationRepo sat) {
//        NotificationProcessing.notificationRepo = notificationRepo;
//    }

//    @PostMapping("/decom")
//    public Sat postBody(@RequestBody Sat pstbdy){
//        return SatRepository.save(pstbdy);
//    }


    @GetMapping("/health")
    @Transactional //added
    public ResponseEntity<HttpStatus> health() throws Exception {
        try {
            healthRepository.findAll();
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

