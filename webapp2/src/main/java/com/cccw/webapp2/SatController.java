package com.cccw.webapp2;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "*")
@RestController
//@RequestMapping("/api")
public class SatController {

    @Autowired
    private SatRepository satRepository;

    @RequestMapping(method = RequestMethod.POST,
            value = "/newsat",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = "Access-Control-Allow-Origin:*")
    public Sat save( @RequestBody Sat pstbdy) {
        satRepository.save(pstbdy);
        return pstbdy;
    }

}
