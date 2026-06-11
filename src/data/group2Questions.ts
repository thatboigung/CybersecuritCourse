import { QuizQuestion } from '../types';

const createQuestion = (id: string, text: string, options: string[], correctAnswerIndex: number, explanation: string): QuizQuestion => ({
  id, text, options, correctAnswerIndex, explanation
});

// ========================================================
// QUIZ 1: TOPOLOGIES, SCALES & WIRELESS (20 QUESTIONS)
// ========================================================
export const netBasicsQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-top-1',
    'Which network topology features absolute fault tolerance by providing redundant, direct point-to-point links between every single node?',
    ['Bus Topology', 'Star Topology', 'Ring Topology', 'Mesh Topology'],
    3,
    'A Full Mesh topology provides absolute redundancy by connecting every node to every other node, calculating links as n(n-1)/2.'
  ),
  createQuestion(
    'qn-top-2',
    'An administrator needs to bridge network connectivity across five office buildings situated inside a single Parisian municipal metro sector. Which network category best defines this scale?',
    ['LAN (Local Area Network)', 'WAN (Wide Area Network)', 'MAN (Metropolitan Area Network)', 'PAN (Personal Area Network)'],
    2,
    'A Metropolitan Area Network (MAN) bridges connected systems across municipal distances larger than a local site but smaller than an inter-city WAN link.'
  ),
  createQuestion(
    'qn-top-3',
    'What is the primary operational distance limit of Near Field Communication (NFC) spectrum configurations to secure card-present payments?',
    ['Under 4 Centimeters', 'Under 10 Meters', 'Up to 100 Meters', 'Line of Sight Optical Path'],
    0,
    'NFC operates on highly localized electromagnetic fields with a scale under 4 centimeters, making structural tapping extremely difficult.'
  ),
  createQuestion(
    'qn-top-4',
    'Which storage technology provides dedicated, high-speed block-level access to consolidated arrays of disks over a fiber channel routing fabric, appearing as local raw hard disks?',
    ['SMB Network Share Appliance (NAS)', 'Storage Area Network (SAN)', 'Network Attached Storage (NAS)', 'Redundant Array of Independent Disks (RAID)'],
    1,
    'SAN (Storage Area Network) provides high-speed block-level access to consolidated storage arrays, whereas NAS provides file-level access over standard SMB/NFS.'
  ),
  createQuestion(
    'qn-top-5',
    'Which IEEE standard specifies High-Efficiency WLAN (Wi-Fi 6) operating in both 2.4 GHz and 5 GHz bands?',
    ['IEEE 802.11ac', 'IEEE 802.11ax', 'IEEE 802.11n', 'IEEE 802.11g'],
    1,
    'IEEE 802.11ax (Wi-Fi 6) introduces high-efficiency improvements such as OFDMA and MU-MIMO across 2.4 GHz and 5 GHz frequency bands.'
  ),
  createQuestion(
    'qn-top-6',
    'An enterprise SOHO branch wants to deploy wireless access points that receive power directly through copper ethernet lines. Which technology should they utilize?',
    ['Fibre Channel over Ethernet (FCoE)', 'Power over Ethernet (PoE)', 'Infrared Wireless Link', 'Near Field Transport (NFT)'],
    1,
    'Power over Ethernet (PoE), standardized under IEEE 802.3af/at/bt, delivers DC electrical power along with network data over standard category copper cables.'
  ),
  createQuestion(
    'qn-top-7',
    'Which IoT wireless protocol operates on a mesh network structure in the 900 MHz or 2.4 GHz industrial spectrum, utilizing highly optimized, low-power signals?',
    ['NFC Pay', 'Zigbee', 'Bluetooth Classic', 'Infrared IrDA'],
    1,
    'Zigbee (based on IEEE 802.15.4) is a low-power, low-data-rate mesh network solution designed specifically for IoT and smart home environments.'
  ),
  createQuestion(
    'qn-top-8',
    'Which networking standard outlines Fibre Channel protocol mapping directly over standard Ethernet infrastructure to unify SAN and LAN traffic?',
    ['iSCSI', 'FCoE (Fibre Channel over Ethernet)', 'NFS', 'Infiniband'],
    1,
    'FCoE (Fibre Channel over Ethernet) encapsulates Fibre Channel frames over lossless 10/40 Gigabit Ethernet links, reducing cabling complexity in data centers.'
  ),
  createQuestion(
    'qn-top-9',
    'Which topology carries the high risk of a single point of failure (SPOF) occurring at a central hub switch, which would cause the entire subnet to lose connection?',
    ['Ring Topology', 'Full Mesh Topology', 'Star Topology', 'Dual-Ring Topology'],
    2,
    'In a Star topology, all endpoints connect to a single central switch or hub. If this central device fails, all communication across the star is severed.'
  ),
  createQuestion(
    'qn-top-10',
    'What wireless technology operates exclusively with a highly directional line-of-sight path and is easily blocked by solid physical items like walls or furniture?',
    ['NFC (Near Field Communication)', 'Infrared (IR)', 'Zigbee Mesh', '5 GHz Wi-Fi'],
    1,
    'Infrared (IR) requires a clear, unblocked, straight line-of-sight path of light between the emitter and the receiver to decode commands.'
  ),
  createQuestion(
    'qn-top-11',
    'A remote researcher needs to transfer data from a smart ring to a tablet over a very short distance of 1 meter. Which class of network does this represent?',
    ['PAN (Personal Area Network)', 'CAN (Campus Area Network)', 'WAN (Wide Area Network)', 'MAN (Metropolitan Area Network)'],
    0,
    'A PAN connects personal devices like phones, smartwatches, and headphones over narrow ranges, usually within 10 meters.'
  ),
  createQuestion(
    'qn-top-12',
    'Which block-level SAN protocol maps standard SCSI SCSI SCSI command structures directly onto transport layer TCP/IP packets over standard Ethernet hardware?',
    ['SMB', 'iSCSI', 'NFS', 'FTP'],
    1,
    'iSCSI encapsulates SCSI storage commands inside TCP segments, enabling block-level storage networks over standard copper Ethernet infrastructure.'
  ),
  createQuestion(
    'qn-top-13',
    'Which cellular technology standard is designed to achieve low-latency high-throughput data carrier pipelines using millimeter-wave (mmWave) spectrum bands?',
    ['3G UMTS', '4G LTE', '5G NR (New Radio)', '2G GSM'],
    2,
    '5G NR (New Radio) introduces support for millimeter-wave (mmWave) high-frequency spectra, providing multi-gigabit speeds and sub-millisecond latencies.'
  ),
  createQuestion(
    'qn-top-14',
    'Which network topology relies on a single continuous trunk coaxial cable terminated at both ends, where a break in the cable shuts down the entire network segment?',
    ['Star Topology', 'Bus Topology', 'Mesh Topology', 'Tree Topology'],
    1,
    'A Bus topology uses a single common coaxial trunk cable. If the trunk is severed or lacks terminal resistors, signal reflections collapse the entire segment.'
  ),
  createQuestion(
    'qn-top-15',
    'Which technology utilizes passive responder tags that harvest electromagnetic energy from active scanning reader components to transmit unique inventory ID numbers?',
    ['Bluetooth Low Energy (BLE)', 'RFID (Radio Frequency Identification)', 'Infrared IrDA', '802.11 ax Wi-Fi'],
    1,
    'Passive RFID tags have no internal power source; they are powered by the electromagnetic field emitted by the reader to operate their internal circuitry.'
  ),
  createQuestion(
    'qn-top-16',
    'A network engineer is establishing a highly secure SAN for core banking databases. Which interface provides the fastest, most reliable dedicated fiber channel path?',
    ['SATA III controllers', 'Fibre Channel Host Bus Adapters (HBAs)', 'Wi-Fi 6 AP', 'NFC Smart Card Reader'],
    1,
    'Fibre Channel SANs use dedicated Host Bus Adapters (HBAs) to establish high-performance point-to-point fiber optic routes with zero IP overhead.'
  ),
  createQuestion(
    'qn-top-17',
    'Which wireless standard was the first to operate exclusively in the 5 GHz band to deliver speeds up to 1.3 Gbps using Beamforming and wider channels?',
    ['802.11b', '802.11g', '802.11ac', '802.11n'],
    2,
    'IEEE 802.11ac (Wi-Fi 5) operates exclusively on the 5 GHz band and introduced multi-user MIMO and beamforming technologies to improve speed.'
  ),
  createQuestion(
    'qn-top-18',
    'What represents the core difference between 2.4 GHz and 5 GHz wireless frequencies regarding range and penetration?',
    ['2.4 GHz has shorter range but higher speeds', '5 GHz has longer range and better wall penetration', '2.4 GHz has longer range and better penetration but lower speeds', 'Both bands share identical speed and range capacities'],
    2,
    'Lower frequencies (like 2.4 GHz) travel further and penetrate physical barriers much better, whereas high frequencies (like 5 GHz) offer higher throughput but drop off faster.'
  ),
  createQuestion(
    'qn-top-19',
    'Under IEEE 802.3bt (PoE++ Type 4), what is the maximum wattage level of DC power that can be delivered to high-performance terminal PTZ cameras over standard copper cat cables?',
    ['15.4 Watts', '30 Watts', '60 Watts', '90 Watts'],
    3,
    '802.3bt Type 4 (PoE++) delivers up to 90-100 Watts of DC power, supporting high-draw devices like PTZ cameras and smart displays.'
  ),
  createQuestion(
    'qn-top-20',
    'Which network scale represents a multi-campus university network covering several contiguous physical departments with private fiber conduits?',
    ['PAN', 'CAN (Campus Area Network)', 'WAN', 'NFC'],
    1,
    'A Campus Area Network (CAN) connects multiple local area networks (LANs) across a geographically close institutional campus or military installation.'
  )
];

// ========================================================
// QUIZ 2: OSI LAYERS & CORE HARDWARE (20 QUESTIONS)
// ========================================================
export const osiModelQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-osi-1',
    'At which layer of the standard 7-Layer OSI model does Address Resolution Protocol (ARP) operate to map logical network IPs to hardware MAC addresses?',
    ['Layer 1 (Physical Layer)', 'Layer 2 (Data Link Layer)', 'Layer 3 (Network Layer)', 'Layer 4 (Transport Layer)'],
    1,
    'ARP maps logical Network layer (L3) IPs to hardware Data Link layer (L2) MAC addresses, operating precisely at OSI Layer 2.'
  ),
  createQuestion(
    'qn-osi-2',
    'To analyze and block connection parameters inside the actual user payload data (e.g., stopping specific custom SQL injections), a firewall must inspect traffic at which OSI Layer?',
    ['Layer 2 (Data Link Layer)', 'Layer 3 (Network Layer)', 'Layer 4 (Transport Layer)', 'Layer 7 (Application Layer)'],
    3,
    'Deep packet inspection of user data and web service parameters operates at OSI Layer 7, the Application Layer.'
  ),
  createQuestion(
    'qn-osi-3',
    'What security and routing benefits do Virtual Local Area Networks (VLANs) offer inside an enterprise network switch infrastructure?',
    ['Automatically lease dynamic logical address ranges to hosts', 'Route frames across remote geographic WAN clusters statefully', 'Partition a physical switch logically into separate broadcast domains', 'Encrypt internal network payloads asynchronously over SSL/TLS channels'],
    2,
    'VLANs segment a physical switch logically, partitioning it into separate broadcast domains for local traffic isolation.'
  ),
  createQuestion(
    'qn-osi-4',
    'An engineer is deploying public-facing web servers. Where should they position these systems to isolate them from the high-security corporate intranet?',
    ['Directly inside the physical Default Gateway core bus', 'Within a dedicated Demilitarized Zone (DMZ)', 'On the localhost loopback virtual subnet interface', 'Across a physical SAN array network trunk line'],
    1,
    'The DMZ (Demilitarized Zone) acts as a logical subnetwork buffering trusted internal infrastructures from untrusted external segments.'
  ),
  createQuestion(
    'qn-osi-5',
    'Which layer of the OSI model abstracts character encodings, data compression, and the encryption of SSL/TLS packets?',
    ['Layer 7 (Application)', 'Layer 6 (Presentation)', 'Layer 5 (Session)', 'Layer 4 (Transport)'],
    1,
    'The Presentation Layer (Layer 6) is responsible for translating data, formatting encodings, file compression, and standard encryption/decryption keys.'
  ),
  createQuestion(
    'qn-osi-6',
    'Which standard Protocol Data Unit (PDU) is managed/routed by Layer 4 (Transport Layer) of the OSI model?',
    ['Bitstream', 'Frame', 'Packet', 'Segment (TCP) or Datagram (UDP)'],
    3,
    'Layer 4 manages Segment structures for connection-oriented TCP streams, and Datagram structures for connectionless UDP streams.'
  ),
  createQuestion(
    'qn-osi-7',
    'Which physical device operates strictly at OSI Layer 1 (Physical) to broadcast incoming electrical signals blindly out of every active physical port except the receiving port?',
    ['Network Router', 'Layer 2 Switch', 'Physical Hub', 'Hardware Gateway'],
    2,
    'A Hub is a legacy Layer 1 device with no intelligence. It does not look at MAC or IP addresses; it simply duplicates structural signals across all open ports.'
  ),
  createQuestion(
    'qn-osi-8',
    'Which networking protocol is utilized under IEEE 802.1D to discover physical loops in a switched network and automatically deactivate redundant paths?',
    ['Address Resolution Protocol (ARP)', 'Spanning Tree Protocol (STP)', 'Border Gateway Protocol (BGP)', 'VLAN Trunking Protocol (VTP)'],
    1,
    'Spanning Tree Protocol (STP) blocks redundant logical pathways to prevent broadcast storms, which happen when frames loop endlessly in switched topologies.'
  ),
  createQuestion(
    'qn-osi-9',
    'What type of network hardware operates at OSI Layer 3 to dynamically calculate logical path boundaries and parse IP headers to forward traffic between separate networks?',
    ['Layer 2 Switched nodes', 'Multi-port Hub units', 'Network Routers', 'Physical Frame Repeaters'],
    2,
    'Routers operate at Layer 3 (Network Layer) and use routing tables to make routing decisions based on IP addresses.'
  ),
  createQuestion(
    'qn-osi-10',
    'Which component of an Ethernet Frame is evaluated by a Layer 2 switch to compile its dynamic CAM lookup address table?',
    ['Source IP Address', 'Destination Port Number', 'Source MAC Address', 'Destination IP Address'],
    2,
    'Layer 2 switches analyze incoming frames and record their Source MAC Addresses to build their CAM (Content Addressable Memory) tables.'
  ),
  createQuestion(
    'qn-osi-11',
    'Which OSI Layer manages logical end-to-end socket connections, coordinating the setup, maintenance, and teardown of administrative handshakes?',
    ['Layer 4 (Transport)', 'Layer 5 (Session)', 'Layer 6 (Presentation)', 'Layer 3 (Network)'],
    1,
    'The Session Layer (Layer 5) establishes, controls, and terminates sessions between applications on adjacent or remote systems.'
  ),
  createQuestion(
    'qn-osi-12',
    'What attack vector exploits the lack of validation in the Address Resolution Protocol (ARP) to map a target IP address to an attacker\'s physical MAC address?',
    ['ARP Spoofing / Poisoning', 'MAC Table Flooding', 'VLAN hopping', 'DNS Hijacking'],
    0,
    'ARP Poisoning injects unauthorized, fake ARP replies to bind an attacker\'s MAC address to a gateway IP, enabling Man-in-the-Middle (MITM) visual capturing.'
  ),
  createQuestion(
    'qn-osi-13',
    'Which type of firewall executes stateful inspection, remembering session parameters (like TCP handshakes) to determine if incoming traffic belongs to a legitimate session?',
    ['Stateless Packet Filter', 'Stateful Inspection Firewall', 'Repeater Hub Filter', 'Proxy Gateway Link'],
    1,
    'Stateful firewalls track the status of network connections using a state table, rejecting packets that do not belong to an established flow.'
  ),
  createQuestion(
    'qn-osi-14',
    'An engineer needs to link multiple VLANs carrying separate administrative departments across a single physical trunk link. Which protocol is standard for tagging VLANs?',
    ['IEEE 802.11ax', 'IEEE 802.1Q', 'IEEE 802.3af', 'IEEE 802.1D'],
    1,
    'IEEE 802.1Q is the industry-standard trunking protocol. It inserts a 4-byte VLAN tag into the Ethernet frame header to designate VLAN membership.'
  ),
  createQuestion(
    'qn-osi-15',
    'Which command utility can be executed on a terminal console to view administrative mappings of local IP addresses to physical MAC addresses?',
    ['nslookup', 'arp -a', 'netstat', 'ipconfig /flushdns'],
    1,
    'Running "arp -a" outputs the host\'s local dynamic and static cache mapping tables linking IP addresses to physical MAC interfaces.'
  ),
  createQuestion(
    'qn-osi-16',
    'Which OSI layer is responsible for routing data across host segments, converting segments into packets, physical path determination, and logical addressing?',
    ['Layer 2 (Data Link)', 'Layer 3 (Network)', 'Layer 4 (Transport)', 'Layer 5 (Session)'],
    1,
    'The Network Layer (Layer 3) handles the logical routing of packets across separate geographical domains using structured IP schemas.'
  ),
  createQuestion(
    'qn-osi-17',
    'What occurs during a MAC Address Table Overflow (CAM Overflow) attack against a standard Layer 2 network switch?',
    ['The switch starts functioning as a Layer 3 firewall', 'The switch becomes overloaded, drops all incoming cables, and resets its state', 'The switch database is flooded with fake MAC addresses, forcing it to fail-open and act as a hub', 'The switch encrypts all frames using dynamic SSL/TLS keys'],
    2,
    'A CAM table overflow attack floods the switch with fake MAC addresses. When the CAM table fills up, the switch enters fail-open mode, broadcasting frames out of all ports.'
  ),
  createQuestion(
    'qn-osi-18',
    'Which technology allows a single modern firewall to inspect the entire application layer payload for known Trojan virus signatures and operational exploits?',
    ['L1 Passive Hub filter', 'Next-Generation Firewall (NGFW)', 'L2 MAC address filter', 'Stateless ACL router'],
    1,
    'NGFWs (Next-Generation Firewalls) operate up to OSI Layer 7, executing high-deep packet inspection, IPS safeguards, and anti-virus sweeps.'
  ),
  createQuestion(
    'qn-osi-19',
    'Which physical cable type uses pulses of light passing down narrow silica or plastic glass pipelines, making it completely immune to Electromagnetic Interference (EMI)?',
    ['Shielded Twisted Pair (STP)', 'Coaxial Cable', 'Fiber Optic Cable', 'Unshielded Twisted Pair (UTP)'],
    2,
    'Fiber Optic cables transmit optical light pulses, offering ultra-high bandwidth, long transmission distances, and absolute immunity to EMI.'
  ),
  createQuestion(
    'qn-osi-20',
    'Which layer of the OSI Model handles flow control, error recovery (using checksums), multiplexing, and reliable TCP segment delivery?',
    ['Layer 3 (Network)', 'Layer 4 (Transport)', 'Layer 5 (Session)', 'Layer 2 (Data Link)'],
    1,
    'The Transport Layer (Layer 4) manages reliable or unreliable end-to-end data delivery, incorporating sliding window flow controls and retransmissions.'
  )
];

// ========================================================
// QUIZ 3: IP ADDRESSING & SUBNETTING (20 QUESTIONS)
// ========================================================
export const subnettingQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-sub-1',
    'Which of the following IP addresses is public and routable on the WAN, and NOT reserved as a private range under RFC 1918 guidelines?',
    ['192.168.10.15', '172.16.200.1', '10.254.1.2', '172.32.1.1'],
    3,
    'RFC 1918 reserves 10.0.0.0/8, 172.16.0.0/12 (up to 172.31.255.255), and 192.168.0.0/16. Thus, 172.32.1.1 is outside the Class B private block and is a public address.'
  ),
  createQuestion(
    'qn-sub-2',
    'How many usable host IP interfaces can be actively configured inside a Classless Inter-Domain Routing (CIDR) block assigned a /28 subnet mask?',
    ['30 Usable Hosts', '14 Usable Hosts', '16 Usable Hosts', '254 Usable Hosts'],
    1,
    'For a /28 block, there are 4 host bits (32 - 28 = 4). 2^4 = 16 total IPs. Subtracting the network and broadcast address leaves 14 usable hosts.'
  ),
  createQuestion(
    'qn-sub-3',
    'A local server wants to send an IP packet to a target backup cluster hosted at another branch globally. Which local component is responsible for receiving and routing this outbound trunk traffic?',
    ['Default Gateway Router interface', 'Localhost Loopback adapter (127.0.0.1)', 'Layer-2 Broadcast Address IP endpoint', 'Centrally mapped IPAM lease table'],
    0,
    'The Default Gateway is the border routing path interface designed to receive local packets bound for external global subnet locations.'
  ),
  createQuestion(
    'qn-sub-4',
    'Which standard logical IP address serves as the loopback interface on a local computer workstation to verify network services without physical wire transmission?',
    ['192.168.1.254', '10.0.0.0', '127.0.0.1', '0.0.0.0'],
    2,
    '127.0.0.1 is the universal logical loopback address mapping IP packets immediately back to the local device RAM.'
  ),
  createQuestion(
    'qn-sub-5',
    'What address blocks represent the APIPA (Automatic Private IP Addressing) scope used by a computer to configure itself if a DHCP lease is unavailable?',
    ['10.0.0.0/8', '169.254.0.0/16', '127.0.0.0/8', '192.0.2.0/24'],
    1,
    'Workstations configure themselves with an address in the APIPA range (169.254.0.0 to 169.254.255.255) if they cannot communicate with a DHCP server.'
  ),
  createQuestion(
    'qn-sub-6',
    'An engineer partitions a single /24 subnetwork into two equal-sized blocks of space. What is the new CIDR notation for each block?',
    ['/25', '/26', '/23', '/28'],
    0,
    'Splitting a /24 network block into two equal halves requires borrowing 1 host bit, converting the mask from a /24 into two /25 blocks.'
  ),
  createQuestion(
    'qn-sub-7',
    'Under IPv6 specifications, which address block is reserved exclusively for Link-Local autoconfigurations, isolated only to the local physical wire routing?',
    ['::1/128', '2001:db8::/32', 'fe80::/10', 'ff00::/8'],
    2,
    'IPv6 Link-Local addresses, used for communications on a single local link segment, start with the prefix fe80::/10.'
  ),
  createQuestion(
    'qn-sub-8',
    'What is the subnet mask representation of a /26 CIDR network configuration block?',
    ['255.255.255.0', '255.255.255.192', '255.255.255.128', '255.255.255.240'],
    1,
    'A /26 prefix consists of 26 binary 1s, which compiles to 255.255.255.192 (11000000 binary on the final octet).'
  ),
  createQuestion(
    'qn-sub-9',
    'For any network subnet block, what is the mathematical role of the Broadcast Address?',
    ['It is assigned to stateful DNS proxy gateways for caching services', 'It acts as the local administrative database host interface', 'It is a special signaling IP where frames are broadcast to all hosts on the subnet', 'It serves as a private loopback range for testing network configurations'],
    2,
    'The Broadcast Address (all host bits set to binary 1) is used to send a single packet to every actively listening host in that subnet block.'
  ),
  createQuestion(
    'qn-sub-10',
    'If a host workstation is configured with the IP address 192.168.1.135 and a /25 prefix, what is the valid network address of its subnet?',
    ['192.168.1.0', '192.168.1.128', '192.168.1.64', '192.168.1.192'],
    1,
    'A /25 partition ranges from .0 to .127 (first block) and .128 to .255 (second block). Since .135 sits in the upper half, its network address is 192.168.1.128.'
  ),
  createQuestion(
    'qn-sub-11',
    'How many host bits are available to assign workstation endpoint leases in a /21 network prefix configuration?',
    ['11 Host Bits', '21 Host Bits', '5 Host Bits', '12 Host Bits'],
    0,
    'An IPv4 address has 32 bits. If the network prefix uses 21 bits, the remaining host bits are calculated as 32 - 21 = 11 host bits.'
  ),
  createQuestion(
    'qn-sub-12',
    'Which address block is designated as the universal local loopback interface for IPv6 networking?',
    ['fe80::1', '::1', '::/128', '2001::1'],
    1,
    'The IPv6 loopback address is represented as ::1 (shortened from 127 zeros followed by a single 1).'
  ),
  createQuestion(
    'qn-sub-13',
    'What describes a Classless Inter-Domain Routing (CIDR) block that has a subnet mask of 255.255.255.240?',
    ['/27 block', '/28 block', '/29 block', '/30 block'],
    1,
    'A mask of 255.255.255.240 consists of 28 consecutive active network bits (240 decomposes to 11110000 binary, adding 4 bits to 24).'
  ),
  createQuestion(
    'qn-sub-14',
    'An enterprise team needs to build a point-to-point router connection. To optimize address space, they should use which subnet prefix?',
    ['/24', '/30', '/26', '/32'],
    1,
    'A /30 prefix provides 4 total IP addresses. Subtracting the network and broadcast addresses leaves exactly 2 usable host IPs, perfect for point-to-point links.'
  ),
  createQuestion(
    'qn-sub-15',
    'What is the maximum number of network bits used in any standard IPv4 classless CIDR layout scheme?',
    ['128 bits', '64 bits', '32 bits', '16 bits'],
    2,
    'IPv4 addresses are 32-bit values, meaning the largest CIDR prefix is /32, which specifies a single host interface.'
  ),
  createQuestion(
    'qn-sub-16',
    'If a system diagnostic tool outputs an address starting with Class A block "10.150.1.1", what type of address has been found?',
    ['APIPA dynamic route', 'Class A public WAN route', 'RFC 1918 private address', 'Multicast infrastructure address'],
    2,
    'The 10.0.0.0 to 10.255.255.255 address block is the Class A private network allocation outlined inside the RFC 1918 documentation.'
  ),
  createQuestion(
    'qn-sub-17',
    'What is the broadcast address of the subnetwork 192.168.10.0/24?',
    ['192.168.10.0', '192.168.10.128', '192.168.255.255', '192.168.10.255'],
    3,
    'A /24 network spans 192.168.10.0 to 192.168.10.255. The final address (.255) has all host bits set to binary 1, representing the broadcast address.'
  ),
  createQuestion(
    'qn-sub-18',
    'Which technology allows distinct physical sites with different private subnets (e.g., 10.1.0.0/24 and 10.2.0.0/24) to securely route packets over the public WAN?',
    ['Symmetric Session Keys', 'Fibre Channel HBAs', 'Site-to-Site VPN Tunneling', 'Local loopback interfaces (::1)'],
    2,
    'A Site-to-Site VPN encrypts and tunnels traffic over public channels to securely connect remote internal networks.'
  ),
  createQuestion(
    'qn-sub-19',
    'What is the binary representation of the octet 224 in standard IPv4 IP routing addresses?',
    ['11100000', '11000000', '11110000', '10101010'],
    0,
    '224 is calculated by adding the placeholders 128 + 64 + 32, which maps to binary 11100000.'
  ),
  createQuestion(
    'qn-sub-20',
    'How many usable hosts can be actively assigned in a network with a /29 subnet mask notation?',
    ['8 usable hosts', '6 usable hosts', '2 usable hosts', '1 usable host'],
    1,
    'A /29 subnet mask leaves 3 host bits (32 - 29 = 3). 2^3 = 8 total IP addresses. Subtracting the network and broadcast addresses leaves 6 usable host IPs.'
  )
];

// ========================================================
// QUIZ 4: INFRASTRUCTURES & DEEP PROTOCOLS (20 QUESTIONS)
// ========================================================
export const protocolsQuestions: QuizQuestion[] = [
  createQuestion(
    'qn-pro-1',
    'What represents the correct logical sequence of administrative steps taken during a client DHCP IP lease configuration?',
    ['Offer, Discover, Acknowledge, Request', 'Discover, Offer, Request, Acknowledge', 'Request, Offer, Discover, Acknowledge', 'Discover, Request, Offer, Acknowledge'],
    1,
    'DHCP leases addresses using the DORA handshake: Discover, Offer, Request, and Acknowledge.'
  ),
  createQuestion(
    'qn-pro-2',
    'Which system protocol transfers administrative commands and files in clear-text, and should be replaced with SSH/SFTP respectively?',
    ['Telnet & FTP', 'HTTPS & RDP', 'NTP & DHCP', 'IPAM & FTPS'],
    0,
    'Telnet and FTP transfer passwords and system data in absolute plaintext (clear-text) which can be easily sniffed and captured.'
  ),
  createQuestion(
    'qn-pro-3',
    'What is the primary operational purpose of Network Address Translation (NAT) running on an edge router?',
    ['Securely authenticate admin administrators over RDP sessions', 'Map private RFC 1918 addresses to a single public internet IP', 'Log all timestamped events onto an enterprise IPAM server', 'Verify the digital signatures of incoming certificate authorities'],
    1,
    'NAT translates multiple internal private IPv4 addresses to a single public IP to route traffic on the WAN and hide internal networks.'
  ),
  createQuestion(
    'qn-pro-4',
    'During the TLS handshake process, how is the symmetric session key established between client and server once the certificate is verified?',
    ['The client sends its own raw private key in the initial Client Hello', 'The server publishes its private session key over UDP port 53', 'The client encrypts a pre-master secret key with the server\'s public key', 'The CA third-party directory services push matches to both systems dynamically'],
    2,
    'During standard asymmetric key exchange, the pre-master key is generated by the client, encrypted under the server\'s public key, and transmitted safely.'
  ),
  createQuestion(
    'qn-pro-5',
    'Which DNS resource record maps a friendly host domain name directly to its destination IPv4 address?',
    ['AAAA record', 'MX record', 'A record', 'CNAME record'],
    2,
    'The "A" record (Address) maps a domain name string to a standard 32-bit destination IPv4 address.'
  ),
  createQuestion(
    'qn-pro-6',
    'Which port is the standard destination port targeted by attackers trying to disrupt internal Network Time Protocol (NTP) syncing servers?',
    ['Port 123 (UDP)', 'Port 53 (UDP/TCP)', 'Port 67 (UDP)', 'Port 22 (TCP)'],
    0,
    'Network Time Protocol (NTP), which coordinates timestamps and synchronized system clocks, operates on UDP port 123.'
  ),
  createQuestion(
    'qn-pro-7',
    'What does the "MX" record represent inside an enterprise Domain Name System (DNS) server configuration zone?',
    ['Canonical Name alias identifier', 'Mail Exchange server destination pointer', 'IPv6 address mapping locator', 'Authoritative Start of Authority record'],
    1,
    'The "MX" record (Mail Exchanger) points to the mail servers responsible for receiving email on behalf of a domain.'
  ),
  createQuestion(
    'qn-pro-8',
    'To guarantee secure remote GUI management access onto a Microsoft Windows server host, what port should be filtered and protected?',
    ['Port 22 (TCP)', 'Port 23 (TCP)', 'Port 3389 (TCP)', 'Port 443 (TCP)'],
    2,
    'Remote Desktop Protocol (RDP) on Windows servers utilizes TCP port 3389 (and occasionally UDP 3389) for graphical interface redirection.'
  ),
  createQuestion(
    'qn-pro-9',
    'What security extension adds cryptographic signatures to DNS records to validate the authenticity of domain name queries and block spoofing?',
    ['DNSSEC', 'HTTPS Handshake', 'SNMPv3', 'FTPS Protocol'],
    0,
    'DNSSEC (DNS Security Extensions) protects DNS lookups by adding cryptographic signatures to existing DNS records, verifying source integrity.'
  ),
  createQuestion(
    'qn-pro-10',
    'Which protocol works on port 22 and provides secure, terminal-based CLI access to remote network devices, completely replacing clear-text Telnet?',
    ['SSH', 'FTP', 'RDP', 'TFTP'],
    0,
    'SSH (Secure Shell) encrypts command sessions and access credentials over TCP port 22 to prevent credential sniffing.'
  ),
  createQuestion(
    'qn-pro-11',
    'What is the primary function of a DHCP Relay Agent in enterprise networks?',
    ['Lease IP profiles autonomously to endpoints in active isolation', 'Forward client DHCP requests across local networks to a central DHCP server', 'Block unauthorized rogue DHCP servers from mapping addresses', 'Cache local Domain Name records inside static tables'],
    1,
    'DHCP Relay Agents listen to local client broadcast Discover packets and forward them over Layer 3 routes to central DHCP servers.'
  ),
  createQuestion(
    'qn-pro-12',
    'Which type of DNS record maps an IP back to its hostname, used primarily for reverse lookups in log investigations?',
    ['A Record', 'PTR Record', 'TXT Record', 'SRV Record'],
    1,
    'A PTR (Pointer) record maps an IP address back to its associated hostname, enabling reverse DNS lookups.'
  ),
  createQuestion(
    'qn-pro-13',
    'Which NTP Stratum rating represents a atomic clock or GPS receiver directly attached to a time synchronization server?',
    ['Stratum 0', 'Stratum 1', 'Stratum 15', 'Stratum 2'],
    0,
    'Stratum 0 represents high-precision atomic or GPS hardware clocks; Stratum 1 refers to servers directly attached to a Stratum 0 device.'
  ),
  createQuestion(
    'qn-pro-14',
    'What encryption method is used during the post-handshake phase of an HTTPS session to perform high-speed payload encryption?',
    ['Asymmetric Encryption', 'Symmetric Encryption', 'Hash signatures', 'None (clear-text transfers)'],
    1,
    'Symmetric encryption (with the session keys established during the handshake) handles payload encryption because it is highly efficient.'
  ),
  createQuestion(
    'qn-pro-15',
    'Which secure file transport solution leverages the SSH protocol on port 22 to securely transfer files, replacing legacy FTP?',
    ['TFTP', 'FTPS', 'SFTP', 'HTTPS'],
    2,
    'SFTP (SSH File Transfer Protocol) runs inside an SSH tunnel over TCP port 22, encrypting both commands and data payloads.'
  ),
  createQuestion(
    'qn-pro-16',
    'What port is targeted to intercept secure HTTPS communications during standard network sniffing attacks?',
    ['Port 80', 'Port 443', 'Port 53', 'Port 22'],
    1,
    'HTTPS traffic, encrypted over SSL/TLS, runs by default on TCP port 443.'
  ),
  createQuestion(
    'qn-pro-17',
    'What is the core difference between Port Address Translation (PAT) and Static NAT (SNAT)?',
    ['PAT converts public IPs to private IPv6 ranges; SNAT isolates loopback ranges', 'PAT maps multiple private IPs to a single public IP using unique dynamic ports; SNAT maps private IPs to public IPs on a strict 1-to-1 ratio', 'PAT operates at OSI Layer 2; SNAT operates strictly at the Application Layer', 'PAT requires Fiber channel HBAs; SNAT operates only over Wi-Fi channels'],
    1,
    'PAT (NAT Overload) allows multiple internal endpoints to share a single public IP by tracking dynamic port allocations, whereas Static NAT maps IPs 1-to-1.'
  ),
  createQuestion(
    'qn-pro-18',
    'What does the "CNAME" record represent inside a Domain Name System zone configuration table?',
    ['Start of Authority pointer', 'Canonical Name record used to map an alias hostname to an existing host record', 'IPv6 host address lookup mapping', 'Dynamic Host allocation lease marker'],
    1,
    'A CNAME (Canonical Name) record maps an alias domain name (e.g., www.example.com) to a canonical domain name (e.g., example.com).'
  ),
  createQuestion(
    'qn-pro-19',
    'Which protocol works on port 53 and uses TCP to perform complete DNS zone transfers between primary and secondary DNS name servers?',
    ['DHCP', 'NTP', 'DNS', 'SSH'],
    2,
    'While standard DNS queries use UDP port 53, large zone transfers between authoritative server nodes use TCP port 53.'
  ),
  createQuestion(
    'qn-pro-20',
    'In a DHCP configuration context, what is a DHCP Lease Reservation?',
    ['An IP address reserved exclusively for APIPA configurations', 'A static mapping that ensures a host with a specific MAC address is always assigned the same IP address', 'A block of IP addresses reserved and excluded from dynamic allocation', 'A backup network routing pathway used if a router fails'],
    1,
    'A DHCP lease reservation binds a client workstation\'s unique MAC address to a specific IP, ensuring it always receives that exact IP.'
  )
];

// ========================================================
// EXAM: NETWORKING & INFRASTRUCTURE MASTER EXAM (100 Qs)
// ========================================================
export const group2MasterExamQuestions: QuizQuestion[] = [
  createQuestion(
    'em2-1',
    'Which OSI layer abstracts symmetric session keys, formatting characters (like ASCII/UTF-8), and cryptographically sets up SSL/TLS handshakes?',
    ['Layer 4 (Transport Layer)', 'Layer 5 (Session Layer)', 'Layer 6 (Presentation Layer)', 'Layer 7 (Application Layer)'],
    2,
    'Symmetric encryption, character code translations, and formatting operate precisely at Layer 6, the Presentation Layer.'
  ),
  createQuestion(
    'em2-2',
    'Under RFC 1918 private allocations, what is the valid range of IP addresses reserved under the Class B private address space?',
    ['10.0.0.0 - 10.255.255.255', '172.16.0.0 - 172.31.255.255', '192.168.0.0 - 192.168.255.255', '169.254.0.0 - 169.254.255.255'],
    1,
    'Class B private RFC 1918 scope is defined as 172.16.0.0 through 172.31.255.255.'
  ),
  createQuestion(
    'em2-3',
    'A system administrator needs to divide the empty network IP block 192.168.10.0/24 into four separate, isolated logical host submodules. Which CIDR mask should be assigned to each slice?',
    ['/25', '/26', '/27', '/28'],
    1,
    'Subdividing a /24 network block into 4 even subnets requires borrowing 2 network bits (2^2 = 4 subnets). 24 + 2 = /26 CIDR prefixes.'
  ),
  createQuestion(
    'em2-4',
    'Your network intrusion detection system alerts on UDP packets targeted towards port 53. Which directory infrastructure service is likely being probed or spoofed on that port?',
    ['Domain Name System (DNS)', 'Dynamic Host Configuration Protocol (DHCP)', 'Network Time Protocol (NTP)', 'Remote Desktop Protocol (RDP)'],
    0,
    'DNS operates on standard UDP (and sometimes TCP) port 53.'
  ),
  createQuestion(
    'em2-5',
    'Which protocol is unencrypted and carries web traffic over port 80, highly exposing user payloads to sniffing and packet hijacking if HTTPS is not enforced?',
    ['SSH', 'HTTP', 'FTP', 'RDP'],
    1,
    'HTTP is the archaic clear-text protocol running on port 80.'
  ),
  createQuestion(
    'em2-6',
    'You notice unauthenticated ARP frames being broadcast to map local server IPs to false MAC addresses. What attack is currently being executed?',
    ['ARP Poisoning / Spoofing', 'DNS Cache Poisoning', 'DDoS SYN Flood', 'MAC Flood Attack'],
    0,
    'ARP Poisoning is the classic attacker technique mapping hardware MAC addresses dynamically to targeted corporate gateway IPs on Layer 2.'
  ),
  createQuestion(
    'em2-7',
    'Which statement correctly describes the architectural difference between NAS and SAN configurations?',
    ['NAS runs over dedicated fiber networks only; SAN runs over standard IP networks', 'NAS serves file-level networks using protocols like NFS/SMB; SAN serves block-level storage directly', 'NAS maps block-level disks via iSCSI; SAN operates strictly over browser cookies', 'NAS requires Intel CPU virtualization; SAN relies solely on loopback 127.0.0.1'],
    1,
    'NAS operates as file-ready network mounts shared over traditional SMB/NFS protocols, while SAN represents block-level raw disk arrays.'
  ),
  createQuestion(
    'em2-8',
    'A secure HTTPS website requires an SSL/TLS Handshake. What is the very first packet exchange initiated by a web browser?',
    ['Server Hello with Certificate', 'Client Hello with supported cipher suites', 'Symmetric key validation frame', 'CA security directory lookup call'],
    1,
    'The browser initiates a TLS handshake with a Client Hello containing supported parameters and ciphers.'
  ),
  createQuestion(
    'em2-9',
    'According to standard CIDR calculations, what is the total number of usable host IP addresses available inside a /27 subnet mask framework?',
    ['32 usable hosts', '30 usable hosts', '16 usable hosts', '14 usable hosts'],
    1,
    'A /27 subnet leaves 5 host bits (32 - 27 = 5). 2^5 = 32 total addresses. Subtracting network and broadcast addresses leaves exactly 30 usable host IPs.'
  ),
  createQuestion(
    'em2-10',
    'Which standard category copper twisted-pair cable has specifications extending its transmission bandwidth up to 10 Gbps speeds for maximum runs of 100 meters?',
    ['Cat 5', 'Cat 5e', 'Cat 6a', 'Cat 3'],
    2,
    'Cat 6a (Augmented) supports 10 Gbps speeds over standard copper Ethernet lines at distances up to 100 meters, while Cat 6 is limited to 37-55 meters.'
  ),
  createQuestion(
    'em2-11',
    'Which network topology connects multiple SOHO devices centrally into a physical switch, restricting device failures to isolated workstation ports?',
    ['Star Topology', 'Ring Topology', 'Bus Topology', 'Full Mesh Topology'],
    0,
    'A Star topology routes all devices through a central switch. If a single endpoint cable fails, other nodes on the network are completely unaffected.'
  ),
  createQuestion(
    'em2-12',
    'Which security framework specifies utilizing a separate subnetwork to guest host dynamic external-facing services (like web servers) and isolate high-security internal resources?',
    ['Demilitarized Zone (DMZ)', 'Virtual Local Area Network (VLAN)', 'Storage Area Network (SAN)', 'Wide Area Network (WAN)'],
    0,
    'A DMZ (Demilitarized Zone) is an isolated subnetwork used to expose public-facing services while protecting the private intranet behind a firewall.'
  ),
  createQuestion(
    'em2-13',
    'A router evaluates an IP packet destination address and forwards it based on variables in which database?',
    ['ARP dynamic mapping logs table', 'CAM lookup hardware memory', 'Routing Tables', 'DHCP Lease reservations ledger'],
    2,
    'Routers consult their Routing Tables (compiled dynamically via routing protocols like BGP/OSPF or set statically) to determine a packet\'s next hop.'
  ),
  createQuestion(
    'em2-14',
    'Which networking protocol translates dynamic user-friendly domain name addresses into machine-readable network IP addresses?',
    ['Dynamic Host Configuration Protocol (DHCP)', 'Domain Name System (DNS)', 'Network Time Protocol (NTP)', 'Address Resolution Protocol (ARP)'],
    1,
    'DNS acts as the address book of the Internet, translating text hostnames into numeric IP addresses.'
  ),
  createQuestion(
    'em2-15',
    'A wireless administrator wants to block adjacent rogue clients from intercepting confidential data packets over SOHO Wi-Fi. Which security protocol must be implemented?',
    ['WEP (Wired Equivalent Privacy)', 'WPA3 (Wi-Fi Protected Access 3)', 'WPS PIN Validation', 'TKIP Security Algorithm'],
    1,
    'WPA3 is the latest industry standard wireless security protocol, addressing security vulnerabilities found in WPA2 by replacing PSK with SAE.'
  ),
  createQuestion(
    'em2-16',
    'Which step of the classic DHCP dynamic address lease process represents the client broadcasting a visual request seeking an active IP lease lease server?',
    ['Request', 'Offer', 'Discover', 'Acknowledge'],
    2,
    'The "Discover" phase is the initial step where a client broadcasts a request searching for a DHCP server on the local segment.'
  ),
  createQuestion(
    'em2-17',
    'If a security analyst runs "netstat -ano" on a Windows system, what network telemetry are they aiming to obtain?',
    ['Active local wireless access points list', 'Active TCP/UDP listening socket connections and associated process IDs', 'The physical manufacturer details of the main host NIC', 'DNS cache memory parameters to flush records'],
    1,
    '"netstat -ano" outputs active network connections, listening ports, addresses, and the specific Process IDs (PIDs) running them.'
  ),
  createQuestion(
    'em2-18',
    'Which port is used globally as the standard administrative interface to transfer emails between secure corporate mail transfer servers?',
    ['Port 23', 'Port 25 (SMTP)', 'Port 110 (POP3)', 'Port 143 (IMAP)'],
    1,
    'SMTP (Simple Mail Transfer Protocol) manages mail transfers between servers over standard port 25 (and secure ports like 587/465).'
  ),
  createQuestion(
    'em2-19',
    'What represents the principal disadvantage of selecting a Full Mesh network topology for enterprise physical deployments?',
    ['Extreme lack of core backup redundancy links', 'High configuration cost and cabling complexity because every node must connect directly to every other node', 'Inability to map network endpoints using standard IP subnets', 'Total loss of service across the entire network if a single endpoint link is severed'],
    1,
    'A Full Mesh topology requires vast amounts of cabling and physical ports (n(n-1)/2 connections), making it complex and expensive to scale.'
  ),
  createQuestion(
    'em2-20',
    'Under RFC 1918 allocations, what is the valid range of IP addresses reserved under the Class C private network space?',
    ['10.0.0.0 - 10.255.255.255', '172.16.0.0 - 172.31.255.255', '192.168.0.0 - 192.168.255.255', '169.254.0.0 - 169.254.255.255'],
    2,
    'Class C private networks are defined in RFC 1918 as the range from 192.168.0.0 to 192.168.255.255.'
  ),
  createQuestion(
    'em2-21',
    'At which layer of the 7-Layer OSI model do Layer 2 LAN Switches operate to inspect destination MAC frames?',
    ['Layer 1 (Physical)', 'Layer 2 (Data Link)', 'Layer 3 (Network)', 'Layer 4 (Transport)'],
    1,
    'Switches operate at the Data Link Layer (Layer 2), forwarding frames to destination physical ports by looking up MAC addresses.'
  ),
  createQuestion(
    'em2-22',
    'What standard utility allows an engineer to test physical path latency and trace the exact hops taken by an IP packet across external routers to a destination?',
    ['ping', 'tracert (traceroute)', 'nslookup', 'ipconfig'],
    1,
    'The traceroute (tracert on Windows) tool lists every router interface (hop) a packet traverses to reach its destination, detailing round-trip time (RTT).'
  ),
  createQuestion(
    'em2-23',
    'Which DNS resource record maps a friendly host domain name direct to an enterprise destination IPv6 address?',
    ['A record', 'MX record', 'AAAA record', 'NS record'],
    2,
    'The "AAAA" (quad-A) record maps a domain string specifically to a 128-bit IPv6 address.'
  ),
  createQuestion(
    'em2-24',
    'Which core network hardware device operates strictly at OSI Layer 1 and blind-replicates incoming signals to all ports, creating massive packet collision risks?',
    ['Managed Switch', 'Physical Hub', 'Brouter', 'Stateful Security Firewall'],
    1,
    'Hubs are simple Layer 1 devices. They do not parse addressing data; they simply clone electrical signal inputs across all ports, causing collisions.'
  ),
  createQuestion(
    'em2-25',
    'Which network routing component is characterized as a virtual computer system that is hosted and managed within isolated sandbox hypervisors?',
    ['The HostOS', 'The GuestOS', 'The Bare-Metal Controller', 'The Physical Core NIC'],
    1,
    'A GuestOS is an isolated virtual operating system instance hosted inside simulated hardware layers managed by a hypervisor.'
  ),
  createQuestion(
    'em2-26',
    'If a client workstation has lease parameters pointing to "169.254.100.50", what is the immediate diagnostic conclusion?',
    ['The laptop successfully connected to a high-speed fiber SAN', 'The computer is securely looped back internally over standard 127.0.0.1 parameters', 'The client is using APIPA, signaling it failed to communicate with a DHCP server on the local segment', 'The client is using private RFC 1918 configurations within a Class B network space'],
    2,
    'APIPA IP allocations (169.254.0.0/16) are automatically configured by the host OS when DHCP inquiries fail to receive an offer.'
  ),
  createQuestion(
    'em2-27',
    'Which protocol works on port 22 and provides highly encrypted, command-line terminal management to replace clear-text Telnet?',
    ['SFTP', 'SSH', 'TFTP', 'FTPS'],
    1,
    'SSH (Secure Shell) provides robustly encrypted command-line channels over TCP port 22, safeguarding session details and credentials.'
  ),
  createQuestion(
    'em2-28',
    'To secure a customer web form that transfers high-confidentiality credit card data, what transport configuration should be implemented?',
    ['HTTP over Port 80', 'HTTPS over Port 443 with valid SSL/TLS certificate guidelines', 'FTP transfers over Port 21', 'Telnet session tunnels over Port 23'],
    1,
    'HTTPS encrypts web traffic over TCP port 443 using key architectures validated by trusted third-party Certificate Authorities.'
  ),
  createQuestion(
    'em2-29',
    'Which storage consolidation technology maps block-level storage arrays to multiple server hosts over standard gigabit copper lines using TCP port 3260?',
    ['Network Attached Storage (NAS)', 'iSCSI Storage Area Network (SAN)', 'Fiber Channel HBA loop', 'NFS file cluster shares'],
    1,
    'iSCSI encapsulates SCSI commands inside TCP/IP packets (typically using port 3260), allowing block-level SAN access over standard Ethernet cabling.'
  ),
  createQuestion(
    'em2-30',
    'What security extension adds cryptographic signatures to Domain Name records to protect users from spoofing and DNS redirection hijack campaigns?',
    ['DNSSEC', 'HTTPS protocol wrapper', 'WPA3 keys verification', 'SMTP dynamic security seals'],
    0,
    'DNSSEC (DNS Security Extensions) signs DNS zones cryptographically, verifying resolver queries and protecting against cache poisoning attacks.'
  ),
  createQuestion(
    'em2-31',
    'An engineer partitions a /24 block of IPs to accommodate multiple segments. If they decide to use /28 masks, how many separate subnets are generated?',
    ['4 Subnets', '8 Subnets', '16 Subnets', '32 Subnets'],
    2,
    'Moving from a /24 mask to a /28 mask means borrowing 4 bits (28 - 24 = 4). 2^4 = 16 subnets.'
  ),
  createQuestion(
    'em2-32',
    'At which layer of the OSI model does dynamic deep-packet state evaluation occur inside advanced Next-Generation Firewalls (NGFW)?',
    ['Layer 2 (Data Link)', 'Layer 3 (Network)', 'Layer 4 (Transport)', 'Layer 7 (Application)'],
    3,
    'Next-Generation Firewalls (NGFW) analyze host protocols up to the Application Layer (Layer 7) to inspect user data payloads.'
  ),
  createQuestion(
    'em2-33',
    'To resolve physical broadcast loops generated inside redundant switched layouts, switches must leverage which standard?',
    ['802.1Q VLAN Tags definition', '802.1D Spanning Tree Protocol (STP)', '802.11ac configuration profiles', '802.3af PoE standards'],
    1,
    'Spanning Tree Protocol (STP, IEEE 802.1D) maps connections and disables redundant logical interfaces to prevent broadcast loops.'
  ),
  createQuestion(
    'em2-34',
    'What standard configuration represents the loopback IPv6 interface on any local workstations running modern networking stacks?',
    ['::1', 'fe80::1', '127.0.0.1', 'ff02::1'],
    0,
    'The IPv6 loopback address is ::1, functioning exactly like the IPv4 address 127.0.0.1 for local software testing.'
  ),
  createQuestion(
    'em2-35',
    'Which of the following describes the behavior of a standard Layer 2 LAN Switch once its CAM Table becomes full during a MAC Flood attack?',
    ['The switch goes entirely offline and reboots', 'The switch limits all traffic to 10 Mbps bandwidth speeds', 'The switch fails open and broadcasts incoming frames out of all active ports, acting like a hub', 'The switch enforces automatic SSL encryption on all ports'],
    2,
    'When the CAM table overflows, the switch drops traffic isolation protections and cascades into fail-open mode, acting like a hub.'
  ),
  createQuestion(
    'em2-36',
    'Which step of the SSL/TLS Cryptographic Handshake involves both systems switching to symmetric keys generated from a validated pre-master secret?',
    ['Client Hello parameters validation', 'Server Hello cert transmission', 'Symmetric Session Key generation and encrypted communications active', 'Root Certificate Authority digital signatures lookup'],
    2,
    'After exchanging a secure pre-master secret, both client and server generate matching symmetric session keys to encrypt all subsequent payload traffic.'
  ),
  createQuestion(
    'em2-37',
    'Which type of private IP address is reserved under RFC 1918 within the Class A administrative scope?',
    ['192.168.1.1', '172.16.10.15', '10.0.0.100', '169.254.1.1'],
    2,
    'The Class A private range designated by RFC 1918 spans from 10.0.0.0 to 10.255.255.255.'
  ),
  createQuestion(
    'em2-38',
    'Which network scale classification maps a highly localized device cluster operating around a smart ring, fitness tracker, and laptop?',
    ['WLAN', 'MAN', 'PAN', 'CAN'],
    2,
    'Personal Area Networks (PAN) cover personal devices within extremely close physical proximity (typically less than 10 meters).'
  ),
  createQuestion(
    'em2-39',
    'Which wireless technology uses passive tags that have no battery and harvest RF energy from scanning readers?',
    ['NFC (Near Field)', 'RFID (Radio Frequency Identification)', 'Infrared Link', 'Bluetooth Low Energy (BLE)'],
    1,
    'Passive RFID tags operate without batteries, harvesting electromagnetic energy from active scanning readers.'
  ),
  createQuestion(
    'em2-40',
    'Which port is used globally as the standard interface for Network Time Protocol (NTP) log sync operations across active network nodes?',
    ['Port 53', 'Port 123 (UDP)', 'Port 67', 'Port 161'],
    1,
    'NTP uses UDP port 123 to sync clocks and maintain consistent log timestamps across network devices.'
  ),
  createQuestion(
    'em2-41',
    'An engineer needs to partition clean IP blocks dynamically using different sizes. What is the standard methodology for this process?',
    ['CIDR Subnet allocations', 'Variable Length Subnet Masking (VLSM)', 'Dynamic DHCP relay policies', 'Static NAT 1-to-1 mappings'],
    1,
    'VLSM gives engineers the ability to divide subnets into variable sizes to optimize IP efficiency.'
  ),
  createQuestion(
    'em2-42',
    'Which command-line tool is run to check the actual MAC address of the local network interface on a Linux terminal?',
    ['ipconfig', 'ifconfig or "ip link"', 'netstat -ano', 'nslookup'],
    1,
    'On Linux systems, "ifconfig" or "ip link" displays the hardware configuration, interface parameters, and physical MAC addresses.'
  ),
  createQuestion(
    'em2-43',
    'Which IEEE standard outlines the High-Throughput (Wi-Fi 5) wireless standard working entirely with 5 GHz frequencies?',
    ['802.11n', '802.11ac', '802.11ax', '802.11g'],
    1,
    'IEEE 802.11ac (Wi-Fi 5) operates exclusively within the 5 GHz band, leveraging beamforming to improve range and speeds.'
  ),
  createQuestion(
    'em2-44',
    'What represents the binary representation of the network IP mask configuration "255.255.255.224"?',
    ['/24 CIDR', '/25 CIDR', '/26 CIDR', '/27 CIDR'],
    3,
    '255.255.255.224 uses 27 network bits (the final octet 224 translates to binary components 11100000).'
  ),
  createQuestion(
    'em2-45',
    'Which storage system features direct file-share access over standard IP LAN channels using protocols like NFS (Linux) or SMB (Windows)?',
    ['iSCSI SAN storage cluster', 'Network Attached Storage (NAS)', 'Fibre Channel raw drive controller', 'Local hardware RAID array'],
    1,
    'NAS devices share files over standard IP networks using protocols like NFS (Linux/Unix) and SMB (Windows).'
  ),
  createQuestion(
    'em2-46',
    'Which component represents the final administrative acknowledgment in the classic DHCP dynamic leasing handshake?',
    ['D - Discover', 'O - Offer', 'R - Request', 'A - Acknowledge'],
    3,
    'The DORA handshake ends with the Acknowledge phase, where the DHCP server locks the leased IP profile to the client\'s MAC address.'
  ),
  createQuestion(
    'em2-47',
    'What occurs if two physical ports on a basic network switch are wired together without activating Spanning Tree Protocol (STP)?',
    ['The switch starts to operate as an automated L3 routing node', 'The switch becomes vulnerable to malicious SSL decryption', 'A switching loop occurs, causing broadcast storms that consume all available bandwidth and freeze the network', 'The switch will dynamically power off both ports to save energy'],
    2,
    'Without STP, redundant links form switching loops. Broadcast packets loop endlessly, causing broadcast storms that freeze the network.'
  ),
  createQuestion(
    'em2-48',
    'Which protocol is the direct secure successor to legacy clear-text File Transfer Protocol (FTP), integrating ssh encryption mechanisms over Port 22?',
    ['TFTP', 'FTPS', 'SFTP', 'HTTPS'],
    2,
    'SFTP replaces legacy clear-text FTP by routing file transfer traffic through an encrypted SSH tunnel on port 22.'
  ),
  createQuestion(
    'em2-49',
    'What is the usable host IP capacity of a /29 subnet mask assigned to isolated DMZ partitions?',
    ['30 usable hosts', '14 usable hosts', '6 usable hosts', '2 usable hosts'],
    2,
    'A /29 subnet partition leaves 3 host bits (32 - 29 = 3). 2^3 = 8 addresses. Subtracting network and broadcast IPs leaves 6 usable host addresses.'
  ),
  createQuestion(
    'em2-50',
    'Which network routing protocol operates dynamically to map and route packets globally across main WAN corporate branches?',
    ['Address Resolution Protocol (ARP)', 'Border Gateway Protocol (BGP)', 'Spanning Tree Protocol (STP)', 'VLAN tag management models'],
    1,
    'BGP (Border Gateway Protocol) is the standardized routing protocol designed to route traffic between autonomous systems on the global Internet.'
  ),
  createQuestion(
    'em2-51',
    'A network administrator gets an alert that a system is generating rogue DNS spoofing transactions. What is the goal of a DNS cache poisoning attack?',
    ['To disable physical routers across high-speed WAN cables', 'To inject a malicious IP mapping into a DNS cache, redirecting users seeking legitimate sites to a phishing Server', 'To drain motherboard battery layouts on remote network servers', 'To force local switches to operate as unmanaged legacy hubs'],
    1,
    'DNS Cache Poisoning alters resolver caches to map legitimate domain names to malicious IP addresses controlled by an attacker.'
  ),
  createQuestion(
    'em2-52',
    'What type of address is "fe80::4a50:bc20:11ef:90ab"?',
    ['IPv4 Private Class B address', 'IPv6 Link-Local address', 'IPv6 Global Unicast address', 'IPv6 Loopback address'],
    1,
    'IPv6 Link-Local addresses always use the prefix fe80::/10 for localized communications.'
  ),
  createQuestion(
    'em2-53',
    'Which security mechanism translates internal private RFC 1918 IP addresses to a single public IP to route traffic on the public Internet?',
    ['Dynamic DNS forwarding', 'Network Address Translation (NAT) / Port Address Translation (PAT)', 'Spanning Tree structural modifications', 'VLAN Trunking tags'],
    1,
    'NAT/PAT translates internal private RFC 1918 IPs to a single public IP to route traffic externally and conserve public IPv4 addresses.'
  ),
  createQuestion(
    'em2-54',
    'Which DNS resource record points to safe mail exchange architectures to process inbound enterprise emails?',
    ['CNAME Record', 'PTR Record', 'MX Record', 'TXT Record'],
    2,
    'An MX (Mail Exchanger) record directs email to the servers responsible for receiving mail for that specific domain.'
  ),
  createQuestion(
    'em2-55',
    'Which protocol works on port 53 and handles the transfer of an entire DNS zone database between primary and secondary name servers?',
    ['DNS over TCP Port 53', 'DHCP over UDP Port 67', 'NTP over UDP Port 123', 'SSH over TCP Port 22'],
    0,
    'While standard DNS queries run over UDP port 53, large zone transfers use TCP port 53 to guarantee reliable delivery.'
  ),
  createQuestion(
    'em2-56',
    'What does a "CNAME" record represent in standard DNS configurations?',
    ['A Start of Authority metadata reference', 'An alias record pointing a hostname to another hostname', 'An IPv6 host resolution map', 'A reverse IP lookup record'],
    1,
    'A CNAME (Canonical Name) record maps an alias hostname to another canonical hostname.'
  ),
  createQuestion(
    'em2-57',
    'Which port is targeted to intercept secure remote GUI management connections on a Windows Server host?',
    ['Port 22', 'Port 3389 (RDP)', 'Port 80', 'Port 443'],
    1,
    'Remote Desktop Protocol (RDP) on Windows systems uses TCP port 3389 for graphical interface connections.'
  ),
  createQuestion(
    'em2-58',
    'What occurs if a network engineer adjusts standard IEEE 802.1Q tags inside an Ethernet Frame?',
    ['The frame is encrypted using symmetric session keys', 'The frame is logically assigned to a specific dynamic VLAN channel across trunk connections', 'The frame is translated to loopback 127.0.0.1 parameters', 'The frame is redirected through Fiber channel HBAs'],
    1,
    'IEEE 802.1Q inserts a 4-byte VLAN tag into Ethernet frames to group traffic logically across switch trunks.'
  ),
  createQuestion(
    'em2-59',
    'Which physical cable type is most suitable for interconnecting systems across high-interference manufacturing floors without EMI issues?',
    ['Unshielded Twisted Pair (UTP)', 'Shielded Twisted Pair (STP) or Fiber Optic cabling', 'Coaxial Cable', 'Standard phone lines'],
    1,
    'Fiber Optic cables use light signals and are immune to EMI; Shielded Twisted Pair uses conductive shielding to block noise.'
  ),
  createQuestion(
    'em2-60',
    'Which layer of the OSI model handles the routing of packets across separate geographical domains using structured IP schemas?',
    ['Layer 2 (Data Link)', 'Layer 3 (Network Layer)', 'Layer 4 (Transport)', 'Layer 6 (Presentation)'],
    1,
    'The Network Layer (Layer 3) handles routing, packetizing, and logical addressing across different networks.'
  ),
  createQuestion(
    'em2-61',
    'Which port must be kept open to allow computers to synchronize their system clocks using NTP?',
    ['Port 22 (TCP)', 'Port 53 (UDP)', 'Port 123 (UDP)', 'Port 443 (TCP)'],
    2,
    'NTP (Network Time Protocol) relies on UDP port 123 to sync clocks across network nodes.'
  ),
  createQuestion(
    'em2-62',
    'What represents the principal function of a DHCP Relay Agent?',
    ['To lease IP profiles to hosts independently on a local segment', 'To forward local Layer 2 dynamic client broadcast requests across Layer 3 paths to central servers', 'To block rogue DHCP servers from routing packets', 'To cache dynamic IP DNS records natively'],
    1,
    'DHCP Relay Agents forward DHCP broadcast requests from local clients across subnet boundaries to a central DHCP server.'
  ),
  createQuestion(
    'em2-63',
    'Which type of DNS record maps an IP address back to its associated hostname for reverse lookup operations?',
    ['A Record', 'PTR Record', 'TXT Record', 'MX Record'],
    1,
    'PTR (Pointer) records map an IP address to its associated hostname, enabling reverse DNS lookups.'
  ),
  createQuestion(
    'em2-64',
    'Which NTP Stratum rating represents high-precision atomic or GPS hardware clocks directly connected to reference servers?',
    ['Stratum 0', 'Stratum 1', 'Stratum 10', 'Stratum 15'],
    0,
    'Stratum 0 refers to high-precision hardware clocks (like atomic or GPS clocks). Stratum 1 servers are connected directly to them.'
  ),
  createQuestion(
    'em2-65',
    'What encryption method is used during the web verification phase of an HTTPS handshake to negotiate symmetric session keys?',
    ['Symmetric encryption', 'Asymmetric encryption (using the server\'s public key)', 'Hash verification arrays', 'Clear-text data packets transfer'],
    1,
    'The HTTPS handshake uses asymmetric encryption to securely verify identities and establish session keys.'
  ),
  createQuestion(
    'em2-66',
    'Which secure file transport solution leverages the SSH protocol over port 22 to securely transfer files, replacing legacy FTP?',
    ['TFTP', 'FTPS', 'SFTP', 'HTTPS'],
    2,
    'SFTP (SSH File Transfer Protocol) runs inside an SSH tunnel over TCP port 22, securing both commands and file data.'
  ),
  createQuestion(
    'em2-67',
    'What is the core difference between Static NAT (SNAT) and dynamic Port Address Translation (PAT)?',
    ['SNAT maps IPs on a strict 1-to-1 ratio; PAT maps multiple private IPs to a single public IP using dynamic ports', 'SNAT operates at OSI Layer 2; PAT works at Layer 7', 'SNAT requires fiber HBAs; PAT runs over standard Wi-Fi', 'SNAT is used exclusively for loopbacks; PAT operates only on public links'],
    0,
    'Static NAT maps private IPs to public IPs on a strict 1-to-1 ratio, whereas PAT maps multiple private IPs to one public IP using unique TCP/UDP ports.'
  ),
  createQuestion(
    'em2-68',
    'Which standard represents standard High-Efficiency WLAN (Wi-Fi 6) supporting both 2.4 GHz and 5 GHz frequency bands?',
    ['802.11ac', '802.11n', '802.11ax', '802.11g'],
    2,
    'IEEE 802.11ax (Wi-Fi 6) introduces OFDMA and MU-MIMO improvements to optimize wireless performance on both 2.4 GHz and 5 GHz bands.'
  ),
  createQuestion(
    'em2-69',
    'How many usable host IP addresses can be configured inside a /30 subnet partition?',
    ['4 Usable hosts', '2 Usable hosts', '8 Usable hosts', '0 Usable hosts'],
    1,
    'A /30 prefix provides 4 total IPs (2^2 = 4). Subtracting the network and broadcast addresses leaves exactly 2 usable host IPs.'
  ),
  createQuestion(
    'em2-70',
    'What describes a Metropolitan Area Network (MAN)?',
    ['A localized network serving a single home workspace', 'A network spanning a city or large municipal sector', 'A global network linking separate international sites', 'A wireless network for wearable devices'],
    1,
    'A MAN (Metropolitan Area Network) spans a city or large municipal region, connecting multiple local area networks (LANs).'
  ),
  createQuestion(
    'em2-71',
    'Which type of fiber optic cable is best suited for long-distance transmissions due to its narrow core that routes a single light ray with minimal signal decay?',
    ['Multimode Fiber (MMF)', 'Single-mode Fiber (SMF)', 'Shielded Twisted Pair (STP)', 'Coaxial Core Copper'],
    1,
    'Single-mode Fiber (SMF) has a narrow core that carries a single mode of light, enabling high-speed, long-distance transmission with low attenuation.'
  ),
  createQuestion(
    'em2-72',
    'Which routing protocol is categorized as a Link-State protocol that calculates paths using Dijkstra\'s algorithm within an autonomous system?',
    ['RIP (Routing Information Protocol)', 'OSPF (Open Shortest Path First)', 'BGP (Border Gateway Protocol)', 'ARP mapping standard'],
    1,
    'OSPF is a Link-State routing protocol that uses Dijkstra\'s algorithm to calculate the shortest path tree within an autonomous system.'
  ),
  createQuestion(
    'em2-73',
    'An administrator wants to prevent unauthorized client workstations from plugging into open SOHO wall jacks. What security standard should they deploy?',
    ['IEEE 802.11ac', 'IEEE 802.1X (Port-Based Network Access Control)', 'IEEE 802.3at PoE', 'IEEE 802.1Q tagging'],
    1,
    'IEEE 802.1X is a port-based network access control standard that authenticates devices before granting network access.'
  ),
  createQuestion(
    'em2-74',
    'Which component of a TCP header is modified during a classic TCP SYN Flood DDoS attack to exhaust server resources?',
    ['The source port identifier', 'The TCP handshake flags (SYN bit)', 'The sequence numbers verification cache', 'The sliding window flow parameters'],
    1,
    'In a SYN Flood attack, attackers flood a target with SYN packets, exhausting resources as the server waits to complete handshakes.'
  ),
  createQuestion(
    'em2-75',
    'If a workstation is configured with an IP address of "172.16.15.5" and a mask of "255.255.240.0", what is its network address?',
    ['172.16.0.0', '172.16.15.0', '172.16.128.0', '172.31.0.0'],
    0,
    'A mask of 255.255.240.0 is /20, which increments subnets by 16 in the third octet. Since .15 is in the first block (0-15), the network address is 172.16.0.0.'
  ),
  createQuestion(
    'em2-76',
    'Which command is executed on a Windows command prompt to clear the local DNS resolver cache?',
    ['ipconfig /release', 'ipconfig /flushdns', 'nslookup -clear', 'netstat -f'],
    1,
    'The command "ipconfig /flushdns" clears and resets the contents of the DNS client resolver cache in Windows.'
  ),
  createQuestion(
    'em2-77',
    'What represents the principal benefit of implementing a stateful inspection firewall over a basic stateless packet filtering router?',
    ['Stateless router firewalls decrypt SSL data payloads easily', 'Stateful firewalls check packets against established session states, blocking unsolicited inbound packets', 'Stateful firewalls operate strictly at OSI Layer 1 to block electrical noise', 'Stateful firewalls are 100% immune to all Denial of Service attacks'],
    1,
    'Stateful firewalls track open connections in a state table, automatically blocking inbound packets that do not belong to an active session.'
  ),
  createQuestion(
    'em2-78',
    'Which protocol works on port 161/162 and enables administrators to monitor and manage network devices like routers and switches?',
    ['SMTP', 'SNMP (Simple Network Management Protocol)', 'NTP', 'DHCP'],
    1,
    'SNMP (Simple Network Management Protocol) runs over ports 161/162 and is used to gather diagnostic telemetry and manage network nodes.'
  ),
  createQuestion(
    'em2-79',
    'A network engineer is troubleshooting bad data integrity over short-run copper cables. What is the standard term for electromagnetic signal bleed from one wire to another?',
    ['Attenuation', 'Crosstalk', 'Refraction', 'Jitter'],
    1,
    'Crosstalk is signal interference caused by electromagnetic bleed between adjacent wires in a cable run.'
  ),
  createQuestion(
    'em2-80',
    'What does the term "Jitter" represent in real-time network communications like VoIP and video streaming?',
    ['The absolute decay of signal strength over long physical cables', 'Variation in packet arrival times, resulting in choppy audio or video', 'The total number of packets dropped by an edge router', 'The time delay required for a packet to travel across a network path'],
    1,
    'Jitter measures variation in packet arrival delays. High jitter degrades real-time services like VoIP and video streams.'
  ),
  createQuestion(
    'em2-81',
    'Which layer of the OSI model coordinates reliable sessions, managing flow control and windowing parameters for TCP segments?',
    ['Layer 3 (Network)', 'Layer 4 (Transport)', 'Layer 5 (Session)', 'Layer 2 (Data Link)'],
    1,
    'The Transport Layer (Layer 4) handles reliable data routing, utilizing flow controls and socket multipliers.'
  ),
  createQuestion(
    'em2-82',
    'What is the standard subnet mask for Class C IPv4 addresses under traditional classful address systems?',
    ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'],
    2,
    'Traditional Class C networks use a default mask of 255.255.255.0, corresponding to a /24 prefix.'
  ),
  createQuestion(
    'em2-83',
    'Which protocol is unencrypted and used over UDP port 69 for basic, low-overhead file hosting of router configurations?',
    ['SFTP', 'TFTP (Trivial File Transfer Protocol)', 'FTP', 'FTPS'],
    1,
    'TFTP uses UDP port 69, providing a lightweight, unencrypted file transfer mechanism without directory browsing features.'
  ),
  createQuestion(
    'em2-84',
    'Under wireless networking parameters, what is the purpose of the SSID?',
    ['Symmetric Session Identifier Key', 'The human-readable name assigned to differentiate a wireless network', 'The hardware serial code of a wireless access point', 'A unique dynamic port mapped by PAT'],
    1,
    'The SSID (Service Set Identifier) is the human-readable text name that identifies a wireless local area network.'
  ),
  createQuestion(
    'em2-85',
    'Which network routing device connects different network segments by inspecting logical IPv4 headers to forward packets?',
    ['Layer 2 Switched nodes', 'Network Routers', 'Access Point systems', 'Physical Frame repeaters'],
    1,
    'Routers operate at OSI Layer 3, using logical IP addresses to forward packets across different networks.'
  ),
  createQuestion(
    'em2-86',
    'In a enterprise corporate building, what wireless deployment utilizes a single consolidated physical controller to configure multiple thin APs?',
    ['Independent SOHO configuration', 'WLC (Wireless LAN Controller) architecture', 'APIPA self-assigned networks', 'Local Loopback routing bridges'],
    1,
    'WLC (Wireless LAN Controller) architectures centralize management, letting admins configure and secure fleets of thin APs.'
  ),
  createQuestion(
    'em2-87',
    'Which of the following IPv4 ranges is reserved as non-routable on the public Internet under RFC 1918 Class B standards?',
    ['10.0.0.0 to 10.255.255.255', '172.16.0.0 to 172.31.255.255', '192.168.0.0 to 192.168.255.255', '169.254.0.0 to 169.254.255.255'],
    1,
    'The RFC 1918 Class B private address space spans from 172.16.0.0 through 172.31.255.255.'
  ),
  createQuestion(
    'em2-88',
    'What describes a Storage Area Network (SAN)?',
    ['A localized folder shared over standard SMB/SMB commands', 'A dedicated high-speed network providing block-level access to consolidated disk arrays', 'A cloud-hosted backup solution for user devices', 'A virtual router routing dynamic IP assignments'],
    1,
    'A SAN is a separate high-speed network that provides secure, block-level storage access to enterprise servers.'
  ),
  createQuestion(
    'em2-89',
    'At which layer of the standard 7-Layer OSI model do logical network hubs process and replicate raw bitstreams?',
    ['Layer 1 (Physical)', 'Layer 2 (Data Link)', 'Layer 3 (Network)', 'Layer 4 (Transport)'],
    0,
    'Hubs and repeaters work at the Physical Layer (Layer 1), broadcasting electrical signals without parsing addressing data.'
  ),
  createQuestion(
    'em2-90',
    'What standard maps a known IP address to its corresponding physical MAC hardware address on the local subnet?',
    ['Domain Name System (DNS)', 'Address Resolution Protocol (ARP)', 'Network Time Protocol (NTP)', 'Dynamic Host Configuration Protocol (DHCP)'],
    1,
    'ARP maps logical Layer 3 IP addresses to physical Layer 2 MAC addresses on local subnets.'
  ),
  createQuestion(
    'em2-91',
    'To encrypt file transfers and support directory navigation over a safe port, what solution should replace legacy clear-text FTP?',
    ['TFTP over UDP Port 69', 'SFTP over TCP Port 22', 'HTTP over TCP Port 80', 'NTP over UDP Port 123'],
    1,
    'SFTP secures file transfers and supports directory management by routing traffic through an SSH tunnel on port 22.'
  ),
  createQuestion(
    'em2-92',
    'Which network scale represents a multi-campus SOHO structure connecting separate regional branches globally?',
    ['LAN', 'MAN', 'WAN (Wide Area Network)', 'CAN'],
    2,
    'WANs (Wide Area Networks) span broad geographic regions, connecting LANs across cities, states, or countries.'
  ),
  createQuestion(
    'em2-93',
    'Under wireless security guidelines, which of the following represents the safest, most modern standards to protect enterprise SOHO infrastructures?',
    ['WEP', 'WPA3', 'WPS Pin access', 'TKIP keys dynamic mapping'],
    1,
    'WPA3 is the latest industry standard wireless security protocol, enhancing protections with SAE key negotiation.'
  ),
  createQuestion(
    'em2-94',
    'What is the maximum throughput speed of a Cat 5e Ethernet cable at standard 100-meter lengths?',
    ['10 Mbps', '100 Mbps', '1 Gbps (1000 Mbps)', '10 Gbps'],
    2,
    'Cat 5e twisted-pair cables support transmission speeds up to 1 Gbps at standard distances up to 100 meters.'
  ),
  createQuestion(
    'em2-95',
    'Which type of IPv6 address starts with the prefix "2000::/3"?',
    ['Link-local address', 'Global Unicast address', 'Multicast address', 'Loopback address'],
    1,
    'IPv6 Global Unicast addresses (publicly routable on the global Internet) are allocated from the 2000::/3 block.'
  ),
  createQuestion(
    'em2-96',
    'How many usable host IP interfaces can be actively configured in a /26 subnet block?',
    ['64 Usable Hosts', '62 Usable Hosts', '30 Usable Hosts', '14 Usable Hosts'],
    1,
    'A /26 subnet leaves 6 host bits (32 - 26 = 6). 2^6 = 64 total addresses. Subtracting the network and broadcast addresses leaves 62 usable host IPs.'
  ),
  createQuestion(
    'em2-97',
    'What occurs when an attacker launches an ARP Poisoning campaign against a corporate gateway router?',
    ['The DNS records of corporate servers are wiped', 'Local client traffic is redirected through the attacker\'s network interface (MITM), compromising data confidentiality', 'The physical ports of the switch are disabled', 'Symmetric encryption keys are automatically generated on affected hosts'],
    1,
    'ARP Poisoning maps an attacker\'s MAC address to a gateway IP, letting them intercept, capture, or modify local traffic.'
  ),
  createQuestion(
    'em2-98',
    'Which port is the standard destination targeted by attackers seeking to exploit vulnerabilities in DNS caching?',
    ['Port 22 (TCP)', 'Port 23 (TCP)', 'Port 53 (UDP/TCP)', 'Port 443 (TCP)'],
    2,
    'DNS operations (queries, zone transfers, and caching) utilize port 53 over UDP and TCP.'
  ),
  createQuestion(
    'em2-99',
    'Which layer of the OSI model abstracts character format translation, file compression, and standard encryption/decryption mechanisms?',
    ['Layer 4 (Transport)', 'Layer 5 (Session)', 'Layer 6 (Presentation Layer)', 'Layer 7 (Application)'],
    2,
    'The Presentation Layer (Layer 6) handles encryption/decryption, character set translation, and data compression.'
  ),
  createQuestion(
    'em2-100',
    'If a system administrator runs "tracert google.com" on a Windows terminal, what diagnostic results are they validating?',
    ['The physical serial numbers of local network switches', 'The exact path of router hops taken by packets traversing toward the destination, along with RTT latencies', 'The dynamic DHCP leases database ledger', 'Active listening TCP port sockets list on the local device'],
    1,
    'The traceroute command (tracert on Windows) lists each router hop and measures path latency (RTT) to verify packet routing.'
  )
];
