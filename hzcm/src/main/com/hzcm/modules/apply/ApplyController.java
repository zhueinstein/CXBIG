package com.hzcm.modules.apply;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

/**
 * Created by admin on 2017/4/20.
 */
@Controller
@EnableAutoConfiguration
public class ApplyController {

	@RequestMapping("/")
	@ResponseBody
	String apply(){
		return "ok";
	}

	public static void main(String[] args) throws Exception {
		SpringApplication.run(ApplyController.class, args);
	}
}
