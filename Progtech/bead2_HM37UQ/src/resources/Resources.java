package resources;

import java.io.File;
import java.net.URISyntaxException;

public class Resources {
    
    private Resources() {
    }
    
    public static File getResource(String fileName) throws URISyntaxException {
        return new File(Resources.class.getResource(fileName).toURI());
        //jar file-ból megnyit egy file-t ás visszaadja
    }
    
}

