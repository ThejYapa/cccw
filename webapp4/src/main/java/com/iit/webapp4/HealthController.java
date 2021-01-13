package com.iit.webapp4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
//@RequestMapping("/api")
public class HealthController {

    @Autowired
    HealthRepository healthRepository;

//    @PostMapping("/decom")
//    public Sat postBody(@RequestBody Sat pstbdy){
//        return SatRepository.save(pstbdy);
//    }


    @GetMapping("/health")
    @Transactional //added
    public List<Health> health() throws Exception {
        try {
            return healthRepository.findAll();
            //return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return null;
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

