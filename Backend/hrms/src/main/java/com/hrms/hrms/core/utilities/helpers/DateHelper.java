package com.hrms.hrms.core.utilities.helpers;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class DateHelper {
	public static java.time.LocalDate LocalToDate(java.util.Date date) {
		 return date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
	}
	
	public static LocalDate newDate() {
		 return LocalToDate(new Date());	
	}
	
	public static LocalDate OnlyYearAndMonth(String date) {
		int i = date.split("-").length;
		if(i < 2)
			date += "-01";
		return LocalDate.parse(date);
	}
	
	public static String GetDateTime() {
		LocalDateTime myDateObj = LocalDateTime.now();
	    DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");

	    String formattedDate = myDateObj.format(myFormatObj);
	    
	    return formattedDate;
	}
}
